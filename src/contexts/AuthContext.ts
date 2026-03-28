import React, { createContext, useContext, useState, useCallback } from "react";

export type UserRole = "investor" | "startup" | "mentor" | "admin";

export interface AuthUser {
  email: string;
  name: string;
  role: UserRole;
  avatar: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const demoAccounts: Record<string, AuthUser & { password: string }> = {
  "investor@kman.co": { email: "investor@kman.co", password: "demo1234", name: "James Makonda", role: "investor", avatar: "JM" },
  "startup@kman.co": { email: "startup@kman.co", password: "demo1234", name: "TanzaFarm", role: "startup", avatar: "TF" },
  "mentor@kman.co": { email: "mentor@kman.co", password: "demo1234", name: "Dr. Amina Rashidi", role: "mentor", avatar: "AR" },
  "admin@kman.co": { email: "admin@kman.co", password: "admin1234", name: "KMAN Admin", role: "admin", avatar: "KA" },
};

export { demoAccounts };

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem("kman_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = useCallback((email: string, password: string): boolean => {
    const account = demoAccounts[email];
    if (account && account.password === password) {
      const { password: _, ...userData } = account;
      setUser(userData);
      localStorage.setItem("kman_user", JSON.stringify(userData));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("kman_user");
  }, []);

  return React.createElement(AuthContext.Provider, {
    value: { user, login, logout, isAuthenticated: !!user },
    children,
  });
};

export const roleRouteMap: Record<UserRole, string> = {
  investor: "/investor/dashboard",
  startup: "/startup/dashboard",
  mentor: "/mentor/dashboard",
  admin: "/admin/dashboard",
};
