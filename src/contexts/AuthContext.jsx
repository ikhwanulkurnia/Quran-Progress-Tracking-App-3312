import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock users untuk demo
  const mockUsers = [
    {
      id: 1,
      username: 'superadmin',
      password: 'admin123',
      role: 'super_admin',
      name: 'Super Administrator',
      email: 'superadmin@tahfidz.com'
    },
    {
      id: 2,
      username: 'adminsekolah',
      password: 'admin123',
      role: 'admin_sekolah',
      name: 'Admin Sekolah',
      email: 'admin@sekolah.com',
      school_id: 1
    },
    {
      id: 3,
      username: 'guru1',
      password: 'guru123',
      role: 'guru',
      name: 'Ustadz Ahmad',
      email: 'ahmad@sekolah.com',
      school_id: 1
    },
    {
      id: 4,
      username: 'orangtua1',
      password: 'parent123',
      role: 'orang_tua',
      name: 'Bapak Budi',
      email: 'budi@email.com',
      children: [{ id: 1, name: 'Ali Budi', class: '5A' }]
    }
  ];

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('tahfidz_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const foundUser = mockUsers.find(
      u => u.username === username && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('tahfidz_user', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }

    return { success: false, message: 'Username atau password salah' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tahfidz_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};