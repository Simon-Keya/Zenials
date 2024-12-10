import apiClient from '../../utils/apiClient';

export const uploadContent = async (formData: FormData) => {
  const response = await apiClient.post('/uploads', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const getUploadsByUser = async (userId: string) => {
  const response = await apiClient.get(`/uploads/user/${userId}`);
  return response.data;
};
