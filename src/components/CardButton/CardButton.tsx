import cartIcon from "../../assets/images/icon-cart.svg";
import styles from "./CardButton.module.css";

interface CardButtonProps {
  label: string;
}

export default function CardButton({ label }: CardButtonProps) {
  return (
    <button className={styles.cardButton}>
      <img src={cartIcon} alt="" aria-hidden="true" className={styles.icon} />
      {label}
    </button>
  );
}
