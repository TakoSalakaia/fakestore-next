"use client";
import { useMemo, useState } from "react"; // შეუძლია ჰუქების გამოყენება

const seed = //  მონაცემების საწყისი
[
  { id: 1, title: "Fjallraven Backpack", price: 109.95, qty: 1 },
  { id: 2, title: "Mens Casual Premium T-Shirt", price: 22.3, qty: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState(seed); //კალათის მონაცემების მდგომარეობა და მისი განახლების ფუნქცია

  function changeQty(id, delta) // რაოდენობის შეცვლის ფუნქცია
   {
    setItems((prev) => prev.map((it) => {
      if (it.id !== id) return it;
      const next = Math.min(10, Math.max(1, it.qty + delta));
      return { ...it, qty: next };
    }));
  }

  const total = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]); // ჯამური ღირებულების გამოთვლა

  return (
    <section className="stack">  
      <h1>Cart</h1>
      <div className="stack">
        {items.map((it) => ( //რენდერდება თითოეული ნივთისთვის, სვეტი1 პროდუქტის დასახელებისთვის და ფასი, სვეტი2 რაოდენობის კონტროლისთვის 
          <div key={it.id} className="card" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
            <div className="stack">
              <strong>{it.title}</strong>
              <span className="price">${it.price.toFixed(2)}</span>
            </div>
            <div className="row">
              <button className="btn secondary" onClick={() => changeQty(it.id, -1)}>-</button>
              <span>{it.qty}</span>
              <button className="btn" onClick={() => changeQty(it.id, +1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}> 
        <strong>Total:</strong>                    
        <strong>${total.toFixed(2)}</strong>        
      </div> 
    </section>
  ); }

//თითქმის თუ ფიქსდ ჯამური
