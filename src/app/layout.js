import "../app/globals.css"; // Estilos globales
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Proyecto Next.js - Sahid Mauro Nicolas",
  description: "Preentrega 1",
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