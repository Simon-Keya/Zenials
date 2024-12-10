import React from 'react';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login | Zenials</title>
        <meta name="description" content="Log in to your Zenials account to manage your content and earn badges." />
        <meta name="keywords" content="Zenials, login, creator platform, content monetization" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          {/* Updated Login Heading with extra boldness */}
          <h1 className="text-3xl font-extrabold text-center">Login</h1>
          <form className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
          {/* Darkened text for "Do not have an account?" */}
          <p className="text-center mt-4 text-sm text-gray-900">
            Do not have an account? <a href="/auth/signup" className="text-indigo-600 underline">Sign up</a>
          </p>
          <p className="text-center text-sm">
            <a href="/auth/forgot-password" className="text-indigo-600 underline">Forgot Password?</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
