// src/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/catalog">Catálogo</Link>
        <Link href="/cart">Carrito</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}