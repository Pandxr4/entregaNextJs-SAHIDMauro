// /app/layout.js
import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout";

export const metadata = {
  title: "E-commerce Next.js",
  description: "Catálogo autoadministrable con Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
