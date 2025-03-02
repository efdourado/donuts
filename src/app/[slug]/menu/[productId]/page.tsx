import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/productDetails";
import ProductHeader from "./components/productHeader";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: {
          name: true,
          logoUrl: true,
          slug: true,
        },
      },
    },
  });
  if (!product) {
    return notFound();
  }
  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }
  return (
    <div className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;