export const dynamic = "force-dynamic"; // ყოველთვის ახალი მონაცემი

async function getProducts() { // პროდუქტის მონაცემების მიღება
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" }); 
  if (!res.ok) throw new Error("Failed to fetch products"); 
  return res.json();
}

export default async function ProductsPage() { // პროდუქტის გვერდი
  const products = await getProducts();
  return (
    <section className="grid">
      {products.map((p) => (
        <a key={p.id} href={`/products/details/${p.id}`} className="card">
          <img src={p.image} alt={p.title} />
          <strong>{p.title}</strong>
          <span className="price">${p.price}</span>
        </a>
      ))}
    </section>
  );
}
