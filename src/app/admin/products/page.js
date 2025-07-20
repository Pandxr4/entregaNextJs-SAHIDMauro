"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/db";
import ProductForm from "../../../components/admin/ProductForm";

export default function ProductsAdminPage() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    setProducts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleDelete = async (id) => {
    if (confirm("¿Seguro que querés eliminar este producto?")) {
      await deleteDoc(doc(db, "products", id));
      loadProducts();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Administrar Productos</h1>
      <ProductForm existing={editing} onSave={loadProducts} />
      <hr className="my-6" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="font-bold">{p.name}</h2>
            <p>${p.price}</p>
            <p className="text-sm text-gray-500">Stock: {p.stock}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={() => setEditing(p)} className="text-blue-600">Editar</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-600">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
