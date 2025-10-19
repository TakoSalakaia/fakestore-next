'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { postJSON } from '@/lib/api';
import { useDispatch, useSelector } from 'react-redux';
import { startAuth, successAuth, failAuth } from '@/store/authSlice';
import { saveToken, getToken } from '@/lib/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Yup Schema Validation
const schema = yup.object({
  username: yup.string().required('username required'),
  password: yup.string().required('password required'),
  remember: yup.boolean()
});

export default function LoginPage() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { username: 'johnd', password: 'm38rmF$', remember: true }
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector(s => s.auth);

  // Auto-login თუ token უკვე არსებობს
  useEffect(() => {
    const t = getToken();
    if (t) router.replace('/profile');
  }, [router]);

  // საბმით 
  const onSubmit = async (data) => {
    try {
      dispatch(startAuth());
      const json = await postJSON('https://fakestoreapi.com/auth/login', {
        username: data.username,
        password: data.password
      });
      dispatch(successAuth({ token: json.token, user: data.username }));
      saveToken(json.token, data.remember, data.username);
      router.replace('/profile');
    } catch (e) {
      dispatch(failAuth('Incorrect username or password'));
    }
  };

  //  Form 
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" autoComplete="on">
        
        {/* Username Field */}
        <div>
          <label htmlFor="username" className="block">Username</label>
          <input
            id="username"
            className="border p-2 w-full"
            {...register('username')}
            autoComplete="username"
            placeholder="Enter username"
          />
          {errors.username && <p className="text-red-600 text-sm">{errors.username.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            id="password"
            type="password"
            className="border p-2 w-full"
            {...register('password')}
            autoComplete="current-password"
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        </div>

        {/* Remember Me */}
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register('remember')} />
          <span>Remember me</span>
        </label>

        {/* Error  */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* Submit */}
        <button disabled={loading} className="bg-black text-white px-4 py-2 rounded w-full">
          {loading ? 'Log In...' : 'Log In'}
        </button>
      </form>

      <p className="text-sm opacity-70">Trial User: johnd / m38rmF$</p>
    </div>
  );
}
