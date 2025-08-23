import styles from "./CardImage.module.css";

interface CardImageProps {
  src: string;
  alt: string;
}

export default function CardImage({ src, alt }: CardImageProps) {
  return <img className={styles.cardImage} src={src} alt={alt} />;
}
