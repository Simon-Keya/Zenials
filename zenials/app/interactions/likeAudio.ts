// app/api/likes.ts
import apiClient from '../../utils/apiClient';

// Like an audio
export async function likeAudio(audioId: string, userId: string) {
  const data = await apiClient.post('/likes/audio', { audioId, userId });
  return data; // Return the parsed JSON data
}
