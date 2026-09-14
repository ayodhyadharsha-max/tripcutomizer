'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, cloudStore } from '@/lib/cloudStore';

interface AuthContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, phone: string, name: string) => UserProfile;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Restore persistent session from Cloud Store / localStorage
    const savedUser = cloudStore.getPersistedUser();
    if (savedUser) {
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, phone: string, name: string): UserProfile => {
    const uid = `usr_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const existingProfile = cloudStore.getUserProfile(uid);

    const profile: UserProfile = existingProfile || {
      uid,
      name: name || 'Valued Traveler',
      email,
      phone,
      updatedAt: new Date().toISOString(),
    };

    cloudStore.saveUserProfile(profile);
    cloudStore.setPersistedUser(profile);
    setUser(profile);
    return profile;
  };

  const logout = () => {
    cloudStore.setPersistedUser(null);
    setUser(null);
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!user) return;
    const updated: UserProfile = {
      ...user,
      ...data,
      updatedAt: new Date().toISOString(),
    };
    cloudStore.saveUserProfile(updated);
    cloudStore.setPersistedUser(updated);
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
