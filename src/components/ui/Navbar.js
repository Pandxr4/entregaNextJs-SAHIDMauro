// /components/ui/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">MiTienda</Link>
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <div className={`md:flex gap-4 ${open ? "block" : "hidden"} mt-4 md:mt-0`}>
        <Link href="/catalog" className="block">Catálogo</Link>
        <Link href="/cart" className="block">Carrito</Link>
        <Link href="/admin" className="block">Admin</Link>
      </div>
    </nav>
  );
}
