// app/api/followers.ts
import apiClient from '../../utils/apiClient';

// Fetch followers of a user
export async function fetchFollowers(userId: string) {
  const data = await apiClient.get(`/followers/${userId}`);
  return data; // Return the parsed JSON data
}

// Fetch users followed by a user
export async function fetchFollowing(userId: string) {
  const data = await apiClient.get(`/following/${userId}`);
  return data; // Return the parsed JSON data
}

// Follow a user
export async function followUser(targetId: string) {
  const data = await apiClient.post('/follow', { targetId });
  return data; // Return the parsed JSON data
}

// Unfollow a user
export async function unfollowUser(targetId: string) {
  const data = await apiClient.post('/unfollow', { targetId });
  return data; // Return the parsed JSON data
}
