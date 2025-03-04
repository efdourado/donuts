import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import OrderTypeOption from "./components/orderTypeOption";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.logoUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">
          Taste the Difference
        </h3>
        <p className="opacity-55">
          Delicious food awaits You!
        </p>
        </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <OrderTypeOption
          slug={slug}
          option="DINEIN"
          buttonText="Stay & Savor"
          imageAlt="dine in"
          imageUrl="/dineIn.png"
        />
        <OrderTypeOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="Grab & Go"
          imageAlt="takeaway"
          imageUrl="/takeAway.png"
        />
      </div>
    </div>
); };

export default RestaurantPage;