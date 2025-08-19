interface CardButtonProps {
  label: string;
}

export default function CardButton({ label }: CardButtonProps) {
  return <button>{label}</button>;
}
