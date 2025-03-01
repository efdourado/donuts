import { OrderType } from "@prisma/client/edge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface OrderTypeOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: OrderType;
}

const OrderTypeOption = ({
  slug,
  imageAlt,
  imageUrl,
  buttonText,
  option,
}: OrderTypeOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            fill
            alt={imageAlt}
            className="object-contain"
          />
        </div>

        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?orderType=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderTypeOption;