import React, { useState } from "react";
import Button from "../components/UI/Button";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Login successful!");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="input input-bordered w-full mb-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Login" onClick={handleLogin} />
        </form>
        <div className="mt-4 text-sm text-center">
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => router.push("/auth/reset-password")}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
