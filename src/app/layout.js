// src/app/layout.js
import "../styles/globals.css"; // Estilos globales
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Proyecto Next.js - Sahid Mauro Nicolas",
  description: "Presentación y maquetado del proyecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}