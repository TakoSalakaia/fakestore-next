'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectTotalQty } from "@/store/cartSlice";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const totalQty = useSelector(selectTotalQty);
  const [dark, setDark] = useState(false);

  // --- localStorage დარკ თემის შემოწმება ---
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // --- დარკ ---
  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const links = [
    { href: "/products", label: "Products" },
    { href: "/profile", label: "Profile" },
    { href: "/cart", label: `🛒 Cart (${totalQty})` },
  ];

  return (
    <nav className="navbar-wrapper">
      <div className="container navbar">
        <Link href="/products" className="logo logo-bold">
        FAKE<span>STORE</span>
       </Link>


        {}
        <div className="navlinks">
          {links.map((l) => {
            const isActive = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`navlink ${isActive ? "active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}

          {/* გადართვა*/}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`theme-toggle ${dark ? "dark" : ""}`}
          >
            <span className="toggle-circle"></span>
            <span className="toggle-icon">{dark ? "🌙" : "☀️"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
