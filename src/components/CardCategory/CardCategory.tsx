interface CardCategoryProps {
  category: string;
}

export default function CardCategory({ category }: CardCategoryProps) {
  return <h3>{category}</h3>;
}
