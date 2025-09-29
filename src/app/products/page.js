export const dynamic = "force-dynamic"; // ახალი მონაცემების მისაღებად
async function getProduct(id) // პროდუქტის მონაცემების ასინქრონული მიღება
{ 
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" }); 
  if (!res.ok) throw new Error("Failed to fetch product"); 
  return res.json(); // JSON მონაცემების დაბრუნება
}

export default async function ProductDetails({ params }) // ფუნქცია კონკრეტული პროდუქტის მონაცემების ჩვენებისთვის
{
  const product = await getProduct(params.id);
  return (
    <article className="grid" style={{ gridTemplateColumns: "1fr 1.2fr", alignItems: "start" }}>
      <div className="card"><img src={product.image} alt={product.title} /></div>
      <div className="stack">
        <h1>{product.title}</h1>
        <div className="row" style={{ gap: "1.5rem" }}>
          <span className="price">${product.price}</span>
          <span className="muted">Category: {product.category}</span>
        </div>
        <p>{product.description}</p>
        <div className="row">
          <span>⭐ {product.rating?.rate ?? "-"}</span>
          <span className="muted">({product.rating?.count ?? 0} reviews)</span>
        </div>
      </div>
    </article>
  );
}
