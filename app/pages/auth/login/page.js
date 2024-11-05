"use client";

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });

    if (response.ok) {
      alert('Login successful');
      router.push('/pages/homepage');
    } else {
      const errorData = await response.json();
      alert(errorData.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600">Username</label>
            <input
              type="text"
              {...register('identifier', { required: 'Username is required' })}
              className={`mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.identifier ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.identifier && <p className="mt-1 text-sm text-red-500">{errors.identifier.message}</p>}
          </div>
          
          <div className="flex flex-col">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className={`mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full p-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

