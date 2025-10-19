import Link from "next/link";
import AddToCartButton from "./AddToCartButton"; 

export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section
      className="grid"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {products.map((p) => (
        <div key={p.id} className="card stack">
          <img
            src={p.image}
            alt={p.title}
            style={{ height: "200px", objectFit: "contain" }}
          />
          <h3 className="font-semibold">{p.title}</h3>
          <span className="price">${p.price}</span>

          {/* ღილაკები */}
          <div className="btn-group">
            <Link href={`/products/${p.id}`} className="btn secondary">
              View Details
            </Link>
            <AddToCartButton product={p} />
          </div>
        </div>
      ))}
    </section>
  );
}
