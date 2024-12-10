import apiClient from '../../utils/apiClient';

export const getUserBadges = async (userId: string) => {
  const response = await apiClient.get(`/badges/user/${userId}`);
  return response.data;
};

export const unlockBadge = async (badgeId: string) => {
  const response = await apiClient.post(`/badges/unlock`, { badgeId });
  return response.data;
};
