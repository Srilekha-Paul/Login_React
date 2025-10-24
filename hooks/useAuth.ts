import { useState, useEffect } from 'react';
import { authService } from '../src/services/authService';
import { User } from '../types/auth.types';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const isAuth = authService.isAuthenticated();
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      const userData = authService.getCurrentUser();
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    
    setLoading(false);
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    logout,
    checkAuth,
  };
};