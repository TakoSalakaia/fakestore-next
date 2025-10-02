"use client"; //მომხმარებლის კომპონენტი
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 

const links = [ // ლინკების სია გენერირდება
  { href: "/products", label: "Products" },
  { href: "/profile", label: "Profile" },
  { href: "/cart", label: "Cart" },
];

export default function NavBar() { // ნავბარის კომპონენტი
  const pathname = usePathname(); // მიმდინარე გვერდი 
  return (
    <div className="navbar">
      <Link href="/products" className="row" style={{ fontWeight: 700 }}>🛍️ FakeStore</Link>
      <div className="navlinks">
        {links.map((l) => ( 
          <Link key={l.href} href={l.href} className={`navlink ${pathname.startsWith(l.href) ? "active" : ""}`}>{l.label}</Link>
        ))} 
      </div>
    </div>
  );
}


