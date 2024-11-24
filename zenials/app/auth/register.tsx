import React, { useState } from "react";
import Button from "../components/UI/Button";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
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
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            className="input input-bordered w-full mb-4"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button text="Register" onClick={handleRegister} />
        </form>
      </div>
    </div>
  );
};

export default Register;
