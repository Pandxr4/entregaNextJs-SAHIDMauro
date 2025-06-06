// src/app/catalog/loading.js
export default function LoadingCatalog() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 animate-pulse text-xl">Cargando productos...</p>
    </div>
  );
}