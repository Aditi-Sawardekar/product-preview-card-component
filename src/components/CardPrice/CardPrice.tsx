import Price from "../Price/Price";

export default function CardPrice() {
  return (
    <>
      <Price currency="$" amount={149.99} aria-label="Discounted price" />
      <Price currency="$" amount={169.99} aria-label="Original price" />
    </>
  );
}
