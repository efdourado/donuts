import { Item } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ItemsProps {
  items: Item[];
}

const Items = ({ items }: ItemsProps) => {
  return (
    <div className="space-y-3 px-5">
      {items.map((item) => (
        <Link
          key={item.id}
          href="/"
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          <div>
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {item.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </p>
          </div>

          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;