import { useState, useEffect } from "react";
import { login, register } from "@/utils/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginUser = async (email: string, password: string) => {
    const userData = await login(email, password);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const registerUser = async (email: string, password: string, username: string) => {
    const userData = await register(email, password, username);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, loading, loginUser, registerUser, logout };
};
