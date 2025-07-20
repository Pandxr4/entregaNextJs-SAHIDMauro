// /components/ui/Header.js
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-green shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Navbar />
      </div>
    </header>
  );
}
