import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Placeholder logic for authentication
    if (email === "test@example.com" && password === "password123") {
      return res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
