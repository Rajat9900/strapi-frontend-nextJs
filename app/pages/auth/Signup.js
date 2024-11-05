"use client";

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Signup successful');
      router.push('pages/auth/login');
    } else {
      const errorData = await response.json();
      alert(errorData.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600">Username</label>
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
              className={`mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.username ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

