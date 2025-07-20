"use client";
import { useCart } from "../../hooks/useCart";
import { db } from "../../firebase/db";
import { collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || items.length === 0) return alert("Completa todos los campos");

    try {
      // Actualiza stock
      for (let item of items) {
        const ref = doc(db, "products", item.id);
        const snapshot = await getDoc(ref);
        const currentStock = snapshot.data().stock;

        if (item.quantity > currentStock) {
          return alert(`No hay suficiente stock de ${item.name}`);
        }

        await updateDoc(ref, {
          stock: currentStock - item.quantity,
        });
      }

      // Crea orden
      const order = {
        buyer: { name, email },
        items,
        total: total(),
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "orders"), order);
      clear();
      setSubmitted(true);
    } catch (error) {
      console.error("Error creando orden:", error);
    }
  };

  if (submitted) {
    return <div className="p-6 text-green-600">¡Gracias por tu compra! Tu orden ha sido procesada.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Finalizar Compra</h1>
      <input
        className="block mb-2 border p-2 w-full"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block mb-2 border p-2 w-full"
        placeholder="Email de contacto"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
        Confirmar compra
      </button>
    </div>
  );
}
import { useCart } from "../../hooks/useCart";
import { db } from "../../firebase/db";