import Link from "next/link";

export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products"); //შეცდომა მონაცემების მიღებისას
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="grid">
      {products.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <span className="price">${p.price}</span>

          {/*დეტალები*/}
          <Link href={`/products/${p.id}`} className="btn">
            View Details
          </Link>
        </div>
      ))}
    </section>
  );
}
