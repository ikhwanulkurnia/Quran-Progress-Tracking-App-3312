import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiBook, FiTrendingUp, FiCalendar } = FiIcons;

const AdminSekolahDashboard = () => {
  const stats = [
    {
      title: 'Total Guru',
      value: '15',
      icon: FiUsers,
      color: 'bg-blue-500',
      change: '+1 bulan ini'
    },
    {
      title: 'Total Siswa',
      value: '245',
      icon: FiBook,
      color: 'bg-green-500',
      change: '+12 bulan ini'
    },
    {
      title: 'Rata-rata Progress',
      value: '78%',
      icon: FiTrendingUp,
      color: 'bg-purple-500',
      change: '+3% bulan ini'
    },
    {
      title: 'Kelas Aktif',
      value: '8',
      icon: FiCalendar,
      color: 'bg-red-500',
      change: 'Semua aktif'
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin Sekolah</h1>
          <p className="text-gray-600 mt-1">Kelola sekolah dan pantau progress siswa</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
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

        {/* Content sections would go here */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Siswa Terbaru</h2>
          <p className="text-gray-600">Fitur ini akan menampilkan progress terbaru siswa...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminSekolahDashboard;