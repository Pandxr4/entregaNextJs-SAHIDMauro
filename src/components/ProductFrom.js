"use client";
import { useState } from "react";
import { db } from "../../firebase/db";
import { storage } from "../../firebase/storage";
import {
  addDoc,
  updateDoc,
  doc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function ProductForm({ existing = null, onSave }) {
  const [data, setData] = useState(existing || {
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const uploadImage = async () => {
    const storageRef = ref(storage, `products/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imgURL = data.image;
      if (file) imgURL = await uploadImage();

      const productData = {
        ...data,
        image: imgURL,
        price: Number(data.price),
        stock: Number(data.stock),
        updatedAt: serverTimestamp(),
      };

      if (existing?.id) {
        await updateDoc(doc(db, "products", existing.id), productData);
      } else {
        await addDoc(collection(db, "products"), {
          ...productData,
          createdAt: serverTimestamp(),
        });
      }

      onSave?.();
      setData({ name: "", description: "", price: 0, stock: 0, image: "" });
      setFile(null);
    } catch (error) {
      alert("Error al guardar: " + error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={data.name} onChange={handleInput} className="border p-2 w-full" placeholder="Nombre" />
      <textarea name="description" value={data.description} onChange={handleInput} className="border p-2 w-full" placeholder="Descripción" />
      <input name="price" type="number" value={data.price} onChange={handleInput} className="border p-2 w-full" placeholder="Precio" />
      <input name="stock" type="number" value={data.stock} onChange={handleInput} className="border p-2 w-full" placeholder="Stock" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
        {existing ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
