// /app/admin/page.js
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <ul className="space-y-2">
        <li><Link href="/admin/products" className="text-blue-600 underline">Administrar Productos</Link></li>
        <li><Link href="/admin/orders" className="text-blue-600 underline">Ver Órdenes</Link></li>
      </ul>
    </div>
  );
}
