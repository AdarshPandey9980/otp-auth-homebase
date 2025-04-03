
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  profileImage?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (mobile: string) => Promise<void>;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
  verifyOtp: (mobile: string, otp: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (mobile: string): Promise<void> => {
    try {
      setIsLoading(true);
      // In a real app, this would call an API to send an OTP
      console.log(`Sending OTP to ${mobile}`);
      toast.success(`OTP sent to ${mobile}`);
      // For demo purposes, we're not actually sending an OTP
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Login error:', error);
      toast.error('Failed to send OTP. Please try again.');
      throw error;
    }
  };

  const register = async (userData: Omit<User, 'id'>): Promise<void> => {
    try {
      setIsLoading(true);
      // In a real app, this would call an API to register the user
      console.log('Registering user:', userData);
      toast.success(`OTP sent to ${userData.mobile}`);
      // For demo purposes, we're not actually sending an OTP
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
      throw error;
    }
  };

  const verifyOtp = async (mobile: string, otp: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // In a real app, this would call an API to verify the OTP
      console.log(`Verifying OTP ${otp} for ${mobile}`);
      
      // For demo purposes, any OTP "1234" is valid
      if (otp === "1234") {
        // Mock user data for demonstration
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          name: "Demo User",
          email: "user@example.com",
          mobile: mobile,
          profileImage: "https://api.dicebear.com/7.x/initials/svg?seed=DU&backgroundColor=0ea5e9",
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        toast.success('Successfully logged in');
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      toast.error('Invalid OTP. Please try again.');
      return false;
    } catch (error) {
      setIsLoading(false);
      console.error('OTP verification error:', error);
      toast.error('Failed to verify OTP. Please try again.');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Successfully logged out');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        verifyOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
