import { OrderType } from "@prisma/client";
import { headers } from "next/headers";
import Stripe from "stripe";
import * as ProductRepository from "@/repositories/product.repository";
import { CartProduct } from "@/app/[slug]/menu/contexts/cart";
import { removeCpfPunctuation } from "@/app/[slug]/menu/helpers/cpf";

interface CreateStripeCheckoutInput {
  products: CartProduct[];
  orderId: number;
  slug: string;
  orderType: OrderType;
  cpf: string;
}

export const createStripeCheckoutService = async ({
  orderId,
  products,
  slug,
  orderType,
  cpf,
}: CreateStripeCheckoutInput) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }
  const origin = (await headers()).get("origin") as string;
  const productsWithPrices = await ProductRepository.getProductsByIds(
    products.map((product) => product.id)
  );
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const searchParams = new URLSearchParams();
  searchParams.set("orderType", orderType);
  searchParams.set("cpf", removeCpfPunctuation(cpf));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${origin}/${slug}/orders?${searchParams.toString()}`,
    cancel_url: `${origin}/${slug}/orders?${searchParams.toString()}`,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: [product.imageUrl],
        },
        unit_amount:
          productsWithPrices.find((p) => p.id === product.id)!.price * 100,
      },
      quantity: product.quantity,
  })), });

  return { sessionId: session.id };
};