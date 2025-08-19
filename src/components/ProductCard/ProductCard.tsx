import CardButton from "../CardButton/CardButton";
import CardCategory from "../CardCategory/CardCategory";
import CardDescription from "../CardDescription/CardDescription";
import CardImage from "../CardImage/CardImage";
import CardPrice from "../CardPrice/CardPrice";
import CardTitle from "../CardTitle/CardTitle";

export default function ProductCard() {
  return (
    <>
      <h2>Product Card</h2>
      <CardImage
        src="src\assets\images\image-product-mobile.jpg"
        alt="Image of Gabrielle Essence Eau De Parfum"
      />
      <CardCategory category="perfume" />
      <CardTitle title="Gabrielle Essence Eau De Parfum" />
      <CardDescription
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge,
      perfumer-creator for the house of Chanel."
      />
      <CardPrice currency="$" discountedPrice={149.99} originalPrice={169.99} />
      <CardButton label="Add to Cart" />
    </>
  );
}
