import { useState } from 'react';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';

import './globals.css';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaUserCircle className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaEnvelope className="text-gray-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Your email will be used as your username</p>

          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaLock className="text-gray-400" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-sm w-full font-semibold hover:bg-indigo-600 transition-colors"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <p className="text-gray-600 mr-2">Register with:</p>
          <FaGoogle className="text-red-600 cursor-pointer mr-2" />
          <FaGithub className="text-gray-800 cursor-pointer mr-2" />
          <FaTwitter className="text-blue-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default register;
