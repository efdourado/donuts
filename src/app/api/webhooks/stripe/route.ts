import { NextResponse } from "next/server";
import Stripe from "stripe";
import { revalidatePath } from "next/cache";

import { OrderDAO } from "@/daos/prisma/order.dao";
import { ProductDAO } from "@/daos/prisma/product.dao";
import { PaymentService } from "@/services/payment.service";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY!;

const orderDAO = new OrderDAO();
const productDAO = new ProductDAO();
const paymentService = new PaymentService(productDAO, orderDAO);

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(text, signature, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.log(`Error message: ${errorMessage}`);
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }

  try {
    const { order } = await paymentService.handleWebhook(event);

    if (order) {
      revalidatePath(`/${order.restaurant.slug}/orders`);
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    return new NextResponse("Webhook handler failed. See logs.", {
      status: 500,
  }); }

  return NextResponse.json({ received: true });
}