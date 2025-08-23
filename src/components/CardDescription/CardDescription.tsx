import styles from "./CardDescription.module.css";

interface CardDescriptionProps {
  description: string;
}

export default function CardDescription({ description }: CardDescriptionProps) {
  return <p className={styles.cardDescription}>{description}</p>;
}
