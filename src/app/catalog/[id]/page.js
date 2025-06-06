// src/app/catalog/[id]/page.js
import { db } from "../../../lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id }));
}

export default async function ProductDetailPage({ params }) {
  const docRef = doc(db, "productos", params.id);
  const productSnapshot = await getDoc(docRef);
  const product = productSnapshot.exists() ? productSnapshot.data() : null;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={300} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}