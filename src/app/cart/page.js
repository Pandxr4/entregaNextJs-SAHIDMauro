"use client";
import { useCart } from "../../hooks/useCart";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return <div className="p-6">Tu carrito está vacío.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-4 border-b pb-2">
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>Precio: ${item.price}</p>
            <p>Color: {item.color} | Talle: {item.size}</p>
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              className="border p-1 w-16"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 ml-4"
            >
              Eliminar
            </button>
          </div>
          <p className="font-bold">${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="mt-4 text-right">
        <p className="text-xl">Total: <strong>${total}</strong></p>
        <Link href="/checkout">
          <button className="mt-2 bg-black text-white px-4 py-2 rounded">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
}
