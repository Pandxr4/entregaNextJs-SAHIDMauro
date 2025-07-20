// /components/layout/AdminLayout.js
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold">Panel Admin</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin" className="hover:underline">Inicio</Link>
          <Link href="/admin/products" className="hover:underline">Productos</Link>
          <Link href="/admin/orders" className="hover:underline">Órdenes</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
