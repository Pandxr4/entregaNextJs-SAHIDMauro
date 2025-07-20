// /components/ui/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
      </div>
    </footer>
  );
}
