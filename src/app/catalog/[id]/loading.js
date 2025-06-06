// src/app/catalog/[id]/loading.js
export default function LoadingProductDetail() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 animate-pulse text-xl">Cargando producto...</p>
    </div>
  );
}