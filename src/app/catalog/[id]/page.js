// /app/catalog/[id]/page.js
import { db } from "../../../firebase/db";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }) {
  const docRef = doc(db, "products", params.id);
  const snap = await getDoc(docRef);

  if (!snap.exists()) return notFound();

  const product = snap.data();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* cantidad, colores, variantes, botón agregar al carrito */}
    </div>
  );
}
