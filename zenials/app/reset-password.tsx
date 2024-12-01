import React, { useState } from "react";
import Button from "./components/UI/Button";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert("Password reset link sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReset();
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
          <Button text="Send Reset Link" onClick={handleReset} />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
