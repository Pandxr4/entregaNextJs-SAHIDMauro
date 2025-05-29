// src/components/ProductCard.js
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/catalog/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
        />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}