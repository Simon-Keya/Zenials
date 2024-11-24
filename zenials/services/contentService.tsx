import apiClient from "@/utils/api";

interface Post {
  id: string;
  content: string;
  mediaUrl?: string;
  createdAt: string;
  updatedAt: string;
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

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await apiClient.get("/content/posts");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch posts");
    }
    throw new Error("An unexpected error occurred.");
  }
};

export const createPost = async (content: string, mediaUrl?: string): Promise<Post> => {
  try {
    const response = await apiClient.post("/content/posts", { content, mediaUrl });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create post");
    }
    throw new Error("An unexpected error occurred.");
  }
};

export const deletePost = async (postId: string): Promise<{ message: string }> => {
  try {
    const response = await apiClient.delete(`/content/posts/${postId}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to delete post");
    }
    throw new Error("An unexpected error occurred.");
  }
};
