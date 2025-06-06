// src/app/catalog/page.js
import { Suspense } from "react";
import LoadingCatalog from "./loading";
import CatalogPageContent from "./CatalogPageContent";

export default function CatalogPage() {
  return (
    <Suspense fallback={<LoadingCatalog />}>
      <CatalogPageContent />
    </Suspense>
  );
}