// src/app/catalog/[id]/page.js
"use client";
import { useParams } from "next/navigation";
import { mockProducts } from "../../../data/mockProducts";

export default function ProductDetailPage() {
  const params = useParams();
  // Convertimos el id a número para hacer la búsqueda simple
  const product = mockProducts.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

return (
    <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} width={300} />
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={() => alert("Producto añadido al carrito")}>
            Añadir al carrito
        </button>
    </div>
    );
}