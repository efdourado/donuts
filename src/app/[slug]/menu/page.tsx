import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ orderType: string }>;
}

const isOrderTypeValid = (orderType: string) => {
  return ["DINEIN", "TAKEAWAY"].includes(orderType.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { orderType } = await searchParams;
  if (!isOrderTypeValid(orderType)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      categories: {
        include: { products: true },
  }, }, });
  
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
); };

export default RestaurantMenuPage;