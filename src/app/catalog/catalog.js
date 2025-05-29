// src/app/catalog/page.js
import ProductCard from "../../components/ProductCard";
import { mockProducts } from "../../data/mockData";

export default function CatalogPage() {
  return (
    <div className="catalog">
      <h1>Catálogo de Productos</h1>
      <div className="products-grid">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}