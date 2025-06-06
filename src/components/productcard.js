// src/components/ProductCard.js
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <Link href={`/catalog/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
    </div>
  );
}

// src/components/ProductCard.js
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4">
      <h2>{product.name}</h2>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
}