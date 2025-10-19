'use client';
import { useEffect, useState } from 'react';
import { getToken, clearToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';

export default function ProfilePage() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  // ავტორიზაციის შემოწმება და პროფილის წამოღება
  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace('/login'); // თუ token არ არის, login-ზე გადავიდეს
      return;
    }

    // თუ token არსებობს, ვიღებთ მომხმარებლის მონაცემებს
    async function fetchUser() {
      try {
        const res = await fetch('https://fakestoreapi.com/users/3', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch user');
        const data = await res.json();
        setUser(data);
        setReady(true);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, [router]);

  if (!ready) return <p className="p-6 text-center">loading...</p>;

  const fullName = `${user?.name?.firstname ?? ''} ${user?.name?.lastname ?? ''}`.trim();

  return (
    <section className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <div className="border p-4 rounded-md space-y-2">
        <div>
          <strong>{fullName}</strong>
          <div className="text-gray-600">@{user?.username}</div>
        </div>
        <div className="flex justify-between text-sm">
          <span>📧 {user?.email}</span>
          <span>📞 {user?.phone}</span>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Address:</div>
          <div>
            {user?.address?.number} {user?.address?.street}, {user?.address?.city},{' '}
            {user?.address?.zipcode}
          </div>
        </div>
      </div>

      <button
        className="border px-4 py-2 rounded hover:bg-gray-100"
        onClick={() => {
          clearToken();
          dispatch(logout());
          router.replace('/login');
        }}
      >
        Log Out
      </button>
    </section>
  );
}
