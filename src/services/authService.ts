// import { FormData, AuthResponse } from '../types/auth.types';

// // Base API URL - change this to your actual API endpoint
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// export const authService = {
//   login: async (data: FormData): Promise<AuthResponse> => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: data.email,
//           password: data.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const result: AuthResponse = await response.json();
      
//       // Store token in localStorage
//       if (result.token) {
//         localStorage.setItem('authToken', result.token);
//         localStorage.setItem('user', JSON.stringify(result.user));
//       }
      
//       return result;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   },

//   register: async (data: FormData): Promise<AuthResponse> => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: data.name,
//           email: data.email,
//           password: data.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       const result: AuthResponse = await response.json();
      
//       // Store token in localStorage
//       if (result.token) {
//         localStorage.setItem('authToken', result.token);
//         localStorage.setItem('user', JSON.stringify(result.user));
//       }
      
//       return result;
//     } catch (error) {
//       console.error('Registration error:', error);
//       throw error;
//     }
//   },

//   logout: () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//   },

//   getCurrentUser: (): string | null => {
//     return localStorage.getItem('user');
//   },

//   getToken: (): string | null => {
//     return localStorage.getItem('authToken');
//   },

//   isAuthenticated: (): boolean => {
//     return !!localStorage.getItem('authToken');
//   },
// };