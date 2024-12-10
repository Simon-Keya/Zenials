import React from 'react';
import Head from 'next/head';

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Zenials</title>
        <meta name="description" content="Create your Zenials account to start monetizing your content and earning badges." />
        <meta name="keywords" content="Zenials, sign up, creator platform, content monetization" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form className="mt-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
            <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
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
              placeholder="Create a password"
            />
            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account? <a href="/auth/login" className="text-indigo-600 underline">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
