export default function Footer() { 
  return (
    <footer>
      <div className="container row" style={{ justifyContent: "space-between" }}>
        <span className="muted">© {new Date().getFullYear()} Shop</span>  
        <span className="muted">Powered by FakeStore API 2025</span>
      </div>
    </footer>
  );
}
