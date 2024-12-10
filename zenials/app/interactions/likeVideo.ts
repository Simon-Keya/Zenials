// app/api/likes.ts
import apiClient from '../../utils/apiClient';

// Like a video
export async function likeVideo(videoId: string, userId: string) {
  const data = await apiClient.post('/likes/video', { videoId, userId });
  return data; // Return the parsed JSON data
}
