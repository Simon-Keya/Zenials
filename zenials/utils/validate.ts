export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password: string): boolean => {
    return password.length >= 8; // Ensure password is at least 8 characters
  };
  
  export const validateRequiredFields = (fields: Record<string, string | undefined>): boolean => {
    return Object.values(fields).every((field) => field && field.trim() !== '');
  };
  