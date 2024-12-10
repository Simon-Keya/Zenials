// app/api/likes.ts
import apiClient from '../../utils/apiClient';

// Like an image
export async function likeImage(imageId: string, userId: string) {
  const data = await apiClient.post('/likes/image', { imageId, userId });
  return data; // Return the parsed JSON data
}
