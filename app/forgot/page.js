"use client"

import { useState } from 'react';

export default function page() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };
  
  return (
    <div className="flex justify-center items-center h-screen p-6">
      <form className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center font-montserrat">Forgot Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-xl border-gray-300 focus:outline-none border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </form>
    </div>
  )
}
