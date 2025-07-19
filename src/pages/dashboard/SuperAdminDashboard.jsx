import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiSchool, FiBook, FiTrendingUp, FiActivity, FiBell } = FiIcons;

const SuperAdminDashboard = () => {
  const stats = [
    {
      title: 'Total Sekolah',
      value: '12',
      icon: FiSchool,
      color: 'bg-blue-500',
      change: '+2 bulan ini'
    },
    {
      title: 'Total Guru',
      value: '156',
      icon: FiUsers,
      color: 'bg-green-500',
      change: '+8 bulan ini'
    },
    {
      title: 'Total Siswa',
      value: '2,340',
      icon: FiBook,
      color: 'bg-purple-500',
      change: '+45 bulan ini'
    },
    {
      title: 'Hafalan Selesai',
      value: '89%',
      icon: FiTrendingUp,
      color: 'bg-red-500',
      change: '+5% bulan ini'
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Super Admin</h1>
            <p className="text-gray-600 mt-1">Selamat datang kembali! Berikut ringkasan sistem Anda.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <SafeIcon icon={FiBell} className="w-4 h-4" />
            Notifikasi
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h2>
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {[
                'Sekolah Al-Hikmah mendaftarkan 25 siswa baru',
                'Guru Ahmad menyelesaikan evaluasi Surah Al-Baqarah',
                'Admin Sekolah Darus Salam mengupdate data siswa',
                'Sistem backup berhasil dilakukan'
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Sekolah Terdaftar</h2>
              <SafeIcon icon={FiSchool} className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {[
                { name: 'SD Islam Al-Hikmah', students: 180, status: 'Aktif' },
                { name: 'MI Darus Salam', students: 145, status: 'Aktif' },
                { name: 'SD Plus Tahfidz', students: 220, status: 'Aktif' },
                { name: 'MI Al-Furqan', students: 98, status: 'Pending' }
              ].map((school, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{school.name}</p>
                    <p className="text-sm text-gray-600">{school.students} siswa</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    school.status === 'Aktif' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {school.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuperAdminDashboard;