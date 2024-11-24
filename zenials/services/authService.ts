import apiClient from "@/utils/api";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const loginService = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to login");
    }
    throw new Error("An unexpected error occurred.");
  }
};

export const registerService = async (
  email: string,
  password: string,
  username: string
): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post("/auth/register", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to register");
    }
    throw new Error("An unexpected error occurred.");
  }
};

export const resetPasswordService = async (email: string): Promise<{ message: string }> => {
  try {
    const response = await apiClient.post("/auth/reset-password", { email });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to reset password");
    }
    throw new Error("An unexpected error occurred.");
  }
};

// Utility function to check if an error is an AxiosError
const isAxiosError = (error: unknown): error is AxiosError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as AxiosError).response === "object"
  );
};
