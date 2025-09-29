export default function Footer() { 
  return (
    <div className="row" style={{ justifyContent: "space-between" }}>
      <span className="muted">© {new Date().getFullYear()} Shop</span>  
      <span className="muted">FakeStore API 2025</span>
    </div>
  );
}
