import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: { name: string; email: string } | null;
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const loginWithGoogle = () => {
    // Simuler une connexion Google
    setUser({ name: 'John Doe', email: 'john.doe@gmail.com' });
  };

  const loginWithGithub = () => {
    // Simuler une connexion GitHub
    setUser({ name: 'Jane Doe', email: 'jane.doe@gmail.com' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, loginWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};