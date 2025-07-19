import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import SuperAdminDashboard from './pages/dashboard/SuperAdminDashboard';
import AdminSekolahDashboard from './pages/dashboard/AdminSekolahDashboard';
import GuruDashboard from './pages/dashboard/GuruDashboard';
import OrangTuaDashboard from './pages/dashboard/OrangTuaDashboard';
import TahfidzManagement from './pages/tahfidz/TahfidzManagement';
import StudentProgress from './pages/tahfidz/StudentProgress';
import UserManagement from './pages/admin/UserManagement';
import NotificationCenter from './pages/notifications/NotificationCenter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Super Admin Routes */}
            <Route
              path="/super-admin/*"
              element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <Routes>
                    <Route index element={<SuperAdminDashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="notifications" element={<NotificationCenter />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            
            {/* Admin Sekolah Routes */}
            <Route
              path="/admin-sekolah/*"
              element={
                <ProtectedRoute allowedRoles={['admin_sekolah']}>
                  <Routes>
                    <Route index element={<AdminSekolahDashboard />} />
                    <Route path="tahfidz" element={<TahfidzManagement />} />
                    <Route path="students" element={<StudentProgress />} />
                    <Route path="notifications" element={<NotificationCenter />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            
            {/* Guru Routes */}
            <Route
              path="/guru/*"
              element={
                <ProtectedRoute allowedRoles={['guru']}>
                  <Routes>
                    <Route index element={<GuruDashboard />} />
                    <Route path="tahfidz" element={<TahfidzManagement />} />
                    <Route path="students" element={<StudentProgress />} />
                    <Route path="notifications" element={<NotificationCenter />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            
            {/* Orang Tua Routes */}
            <Route
              path="/orang-tua/*"
              element={
                <ProtectedRoute allowedRoles={['orang_tua']}>
                  <Routes>
                    <Route index element={<OrangTuaDashboard />} />
                    <Route path="progress" element={<StudentProgress />} />
                    <Route path="notifications" element={<NotificationCenter />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;