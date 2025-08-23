import styles from "./CardTitle.module.css";

interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return <h2 className={styles.cardTitle}>{title}</h2>;
}
