export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export const validatePassword = (password: string) => password.length >= 8;
export const validateConfirmPassword = (p: string, c: string) => p === c;
