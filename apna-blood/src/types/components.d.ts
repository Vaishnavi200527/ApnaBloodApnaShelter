import { ReactNode } from 'react';

export interface NavbarProps {
  isAuthenticated: boolean;
}

export interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

export interface ProtectedRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
} 