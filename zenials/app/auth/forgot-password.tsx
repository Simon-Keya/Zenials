import React from 'react';
import Head from 'next/head';

const ForgotPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password | Zenials</title>
        <meta name="description" content="Recover your Zenials account password by providing your registered email address." />
        <meta name="keywords" content="Zenials, forgot password, account recovery, content monetization" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
          <form className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your registered email"
            />
            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Remember your password? <a href="/auth/login" className="text-indigo-600 underline">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
