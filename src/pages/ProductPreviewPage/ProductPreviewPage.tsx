import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductPreviewPage.module.css";

export default function ProductPreviewPage() {
  return (
    <main className={styles.pageContainer}>
      <ProductCard />
    </main>
  );
}
