import Price from "../Price/Price";

interface CardPriceProps {
  currency: string;
  discountedPrice: number;
  originalPrice: number;
}

export default function CardPrice({
  currency,
  discountedPrice,
  originalPrice,
}: CardPriceProps) {
  return (
    <>
      <Price
        currency={currency}
        amount={discountedPrice}
        aria-label="Discounted price"
      />
      <Price
        currency={currency}
        amount={originalPrice}
        aria-label="Original price"
      />
    </>
  );
}
