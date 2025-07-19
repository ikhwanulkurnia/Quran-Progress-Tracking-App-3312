import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const { FiHome, FiUsers, FiBook, FiBarChart3, FiBell, FiLogOut, FiSettings, FiUser } = FiIcons;

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const getMenuItems = () => {
    const baseItems = [
      { name: 'Dashboard', icon: FiHome, path: '' },
    ];

    switch (user?.role) {
      case 'super_admin':
        return [
          ...baseItems,
          { name: 'Manajemen User', icon: FiUsers, path: 'users' },
          { name: 'Notifikasi', icon: FiBell, path: 'notifications' },
        ];
      case 'admin_sekolah':
        return [
          ...baseItems,
          { name: 'Tahfidz', icon: FiBook, path: 'tahfidz' },
          { name: 'Progress Siswa', icon: FiBarChart3, path: 'students' },
          { name: 'Notifikasi', icon: FiBell, path: 'notifications' },
        ];
      case 'guru':
        return [
          ...baseItems,
          { name: 'Tahfidz', icon: FiBook, path: 'tahfidz' },
          { name: 'Progress Siswa', icon: FiBarChart3, path: 'students' },
          { name: 'Notifikasi', icon: FiBell, path: 'notifications' },
        ];
      case 'orang_tua':
        return [
          ...baseItems,
          { name: 'Progress Anak', icon: FiBarChart3, path: 'progress' },
          { name: 'Notifikasi', icon: FiBell, path: 'notifications' },
        ];
      default:
        return baseItems;
    }
  };

  const getBasePath = () => {
    switch (user?.role) {
      case 'super_admin': return '/super-admin';
      case 'admin_sekolah': return '/admin-sekolah';
      case 'guru': return '/guru';
      case 'orang_tua': return '/orang-tua';
      default: return '/';
    }
  };

  const menuItems = getMenuItems();
  const basePath = getBasePath();

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiBook} className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Tahfidz Tracker</h1>
            <p className="text-sm text-gray-600 capitalize">{user?.role?.replace('_', ' ')}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const fullPath = item.path ? `${basePath}/${item.path}` : basePath;
            const isActive = location.pathname === fullPath;
            
            return (
              <li key={item.name}>
                <Link
                  to={fullPath}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-700 border-r-2 border-red-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3 px-4 py-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <SafeIcon icon={FiUser} className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <SafeIcon icon={FiLogOut} className="w-4 h-4" />
          <span className="text-sm font-medium">Keluar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;