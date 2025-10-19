'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, title, price, image } = product;

  return (
    <div className="border rounded p-4 space-y-2">
      <Link href={`/products/${id}`}><img src={image} alt={title} className="w-full h-48 object-contain" /></Link>
      <h3 className="font-medium line-clamp-2">{title}</h3>
      <p>${price}</p>
      <div className="flex gap-2">
        <Link className="underline" href={`/products/${id}`}>View Details</Link>
        <button className="ml-auto bg-black text-white px-3 py-1 rounded"
          onClick={()=>dispatch(addToCart({ id, title, price, image }))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
