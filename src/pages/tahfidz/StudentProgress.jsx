import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers } = FiIcons;

const StudentProgress = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Progress Siswa</h1>
          <p className="text-gray-600 mt-1">Pantau perkembangan hafalan siswa</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Progress Hafalan</h2>
          </div>
          <p className="text-gray-600">Detail progress hafalan siswa akan ditampilkan di sini...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentProgress;