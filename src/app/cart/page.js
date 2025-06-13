// src/app/cart/page.js
export function generateMetadata({params, searchParams,}, parent) { 
  return {
    title: "Carrito de Compras",
    description: "Revisa los productos que has agregado a tu carrito.",
  };    
} 
export default function CartPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Carrito de Compras</h1>
      <p className="text-center text-gray-600">Aquí se mostrarán los productos agregados.</p>
    </div>
  );
}