// src/app/catalog/CatalogPageContent.js
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../../components/productcard.js";

async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default async function CatalogPageContent() {
  const products = await fetchProducts();

  return (
    <div className="catalog">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}