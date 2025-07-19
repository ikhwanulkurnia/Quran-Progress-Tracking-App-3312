import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiUsers, FiCheckCircle, FiClock } = FiIcons;

const GuruDashboard = () => {
  const stats = [
    {
      title: 'Siswa Aktif',
      value: '32',
      icon: FiUsers,
      color: 'bg-blue-500',
      change: 'Semester ini'
    },
    {
      title: 'Surah Selesai',
      value: '15',
      icon: FiCheckCircle,
      color: 'bg-green-500',
      change: 'Bulan ini'
    },
    {
      title: 'Dalam Progress',
      value: '8',
      icon: FiClock,
      color: 'bg-yellow-500',
      change: 'Sedang berlangsung'
    },
    {
      title: 'Total Hafalan',
      value: '456',
      icon: FiBook,
      color: 'bg-purple-500',
      change: 'Ayat selesai'
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Guru</h1>
          <p className="text-gray-600 mt-1">Pantau dan evaluasi progress hafalan siswa</p>
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
                  <p className="text-sm text-blue-600 mt-1">{stat.change}</p>
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
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Siswa yang Perlu Evaluasi</h2>
          <p className="text-gray-600">Daftar siswa yang membutuhkan evaluasi hafalan...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuruDashboard;