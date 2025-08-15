interface CardDescriptionProps {
  description: string;
}

export default function CardDescription({ description }: CardDescriptionProps) {
  return <p>{description}</p>;
}
