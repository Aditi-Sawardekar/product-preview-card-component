interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return <h2>{title}</h2>;
}
