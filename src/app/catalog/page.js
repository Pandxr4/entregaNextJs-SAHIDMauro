// /app/catalog/page.js
import { fetchProducts } from "../../data/serverFetch";
import ProductCard from "../../components/ProductCard";

export const dynamic = 'force-dynamic';

export default async function CatalogPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Catálogo</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
