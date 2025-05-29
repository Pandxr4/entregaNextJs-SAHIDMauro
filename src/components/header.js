// src/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-around">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/catalog" className="hover:text-gray-400">Catálogo</Link>
        <Link href="/cart" className="hover:text-gray-400">Carrito</Link>
        <Link href="/admin" className="hover:text-gray-400">Admin</Link>
      </nav>
    </header>
  );
}