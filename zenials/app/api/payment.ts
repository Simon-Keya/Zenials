import apiClient from '../../utils/apiClient';

export const getPaymentHistory = async (userId: string) => {
  const response = await apiClient.get(`/payments/history/${userId}`);
  return response.data;
};

export const initiatePayment = async (amount: number, currency: string) => {
  const response = await apiClient.post('/payments/initiate', { amount, currency });
  return response.data;
};

export const verifyPayment = async (paymentId: string) => {
  const response = await apiClient.get(`/payments/verify/${paymentId}`);
  return response.data;
};
