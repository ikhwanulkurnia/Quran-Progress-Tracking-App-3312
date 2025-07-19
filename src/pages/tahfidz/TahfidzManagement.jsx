import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiPlus } = FiIcons;

const TahfidzManagement = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manajemen Tahfidz</h1>
            <p className="text-gray-600 mt-1">Kelola program tahfidz dan hafalan siswa</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            Tambah Program
          </motion.button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <SafeIcon icon={FiBook} className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Program Tahfidz</h2>
          </div>
          <p className="text-gray-600">Fitur manajemen tahfidz akan ditampilkan di sini...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default TahfidzManagement;