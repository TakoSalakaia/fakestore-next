export const dynamic = "force-dynamic"; // ახალი მონაცემების მისაღებად

async function getUser() {
  const res = await fetch("https://fakestoreapi.com/users/3", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch user"); //შეცდომა მონაცემების მიღებისას
  return res.json(); 
}

export default async function ProfilePage() { 
  const u = await getUser(); // მომხმარებლის მონაცემების მიღება
  const fullName = `${u.name?.firstname ?? ""} ${u.name?.lastname ?? ""}`.trim();
  return (
    <section className="stack"> 
      <h1>Profile</h1>
      <div className="card">
        <div className="stack">
          <strong>{fullName}</strong>
          <span className="muted">@{u.username}</span>
          <div className="row"><span>📧 {u.email}</span><span>📞 {u.phone}</span></div>
          <div>
            <div className="muted">Address</div>
            <div>{u.address?.number} {u.address?.street}, {u.address?.city}, {u.address?.zipcode}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
