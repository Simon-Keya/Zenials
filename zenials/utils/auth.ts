import apiClient from "./api";

// Define types for API responses
interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

interface RegisterResponse {
  message: string;
}

interface ResetPasswordResponse {
  message: string;
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

// Utility function to check if an error is an AxiosError
const isAxiosError = (error: unknown): error is AxiosError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as AxiosError).response === "object"
  );
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
    throw new Error("An unexpected error occurred during login.");
  }
};

export const register = async (
  email: string,
  password: string,
  username: string
): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post<RegisterResponse>("/auth/register", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
    throw new Error("An unexpected error occurred during registration.");
  }
};

export const resetPassword = async (
  email: string
): Promise<ResetPasswordResponse> => {
  try {
    const response = await apiClient.post<ResetPasswordResponse>(
      "/auth/reset-password",
      { email }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Reset password failed"
      );
    }
    throw new Error("An unexpected error occurred during password reset.");
  }
};
