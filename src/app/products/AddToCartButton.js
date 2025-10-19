'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <button onClick={handleAdd} className="btn">
      Add to Cart
    </button>
  );
}
