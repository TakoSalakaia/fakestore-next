'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectTotalQty,
  selectTotalAmount,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from '@/store/cartSlice';

export default function CartPage() {
  const items = useSelector(selectCartItems);
  const totalQty = useSelector(selectTotalQty);
  const totalAmt = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  return (
    <section className="stack">
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <div className="stack">
            {items.map((it) => (
              <div
                key={it.id}
                className="card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                }}
              >
                <div className="stack">
                  <strong>{it.title}</strong>
                  <span className="price">${it.price.toFixed(2)}</span>
                </div>
                <div className="row">
                  <button
                    className="btn secondary"
                    onClick={() => dispatch(decreaseQty(it.id))}
                  >
                    -
                  </button>
                  <span>{it.qty}</span>
                  <button
                    className="btn"
                    onClick={() => dispatch(increaseQty(it.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn secondary"
                    onClick={() => dispatch(removeFromCart(it.id))}
                    style={{ marginLeft: '10px' }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="row"
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <strong>Total Quantity:</strong>
            <strong>{totalQty}</strong>
          </div>

          <div
            className="row"
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <strong>Total Amount:</strong>
            <strong>${totalAmt.toFixed(2)}</strong>
          </div>

          <button
            className="btn secondary"
            onClick={() => dispatch(clearCart())}
            style={{ marginTop: '10px' }}
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}
