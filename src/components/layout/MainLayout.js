// /components/layout/MainLayout.js
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}
