"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/db";

export default function OrdersAdminPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "orders"));
      setOrders(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Órdenes Realizadas</h1>
      {orders.map((o) => (
        <div key={o.id} className="border p-4 mb-4 rounded">
          <p><strong>Cliente:</strong> {o.buyer.name} - {o.buyer.email}</p>
          <ul className="ml-4 mt-2 list-disc">
            {o.items.map((i) => (
              <li key={i.id}>{i.name} x {i.quantity}</li>
            ))}
          </ul>
          <p className="mt-2"><strong>Total:</strong> ${o.total}</p>
        </div>
      ))}
    </div>
  );
}
