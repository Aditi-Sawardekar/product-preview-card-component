import Price from "../Price/Price";
import styles from "./CardPrice.module.css";

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
    <div className={styles.priceSection}>
      <Price
        currency={currency}
        amount={discountedPrice}
        aria-label="Discounted price"
        className={styles.discountedPrice}
      />
      <Price
        currency={currency}
        amount={originalPrice}
        aria-label="Original price"
        className={styles.originalPrice}
      />
    </div>
  );
}
