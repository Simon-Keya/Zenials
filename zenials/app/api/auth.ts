import apiClient from '../../utils/apiClient';

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const signup = async (userData: { name: string; email: string; password: string }) => {
  const response = await apiClient.post('/auth/signup', userData);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post('/auth/logout');
  return response.data;
};
