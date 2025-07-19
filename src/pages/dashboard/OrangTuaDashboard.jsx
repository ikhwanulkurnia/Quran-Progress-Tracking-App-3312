import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiTrendingUp, FiCalendar, FiStar, FiRepeat, FiTarget, FiFileText, FiCheckSquare, FiFilter } = FiIcons;

const OrangTuaDashboard = () => {
  const [activeTab, setActiveTab] = useState('hafalan');
  const [hafalanDateRange, setHafalanDateRange] = useState('7'); // days
  const [tahsinDateRange, setTahsinDateRange] = useState('7'); // days

  const stats = [
    {
      title: 'Total Hafalan',
      value: '2 Juz 5 Hal',
      icon: FiBook,
      color: 'bg-green-500',
      change: 'Juz 29-30 & Al-Baqarah 5 hal'
    },
    {
      title: 'Total Tahsin',
      value: '3 Juz 12 Hal',
      icon: FiFileText,
      color: 'bg-blue-500',
      change: 'Juz 1-3 & sebagian Juz 4'
    },
    {
      title: 'Nilai Rata-rata',
      value: '8.5',
      icon: FiStar,
      color: 'bg-yellow-500',
      change: 'Sangat baik'
    },
    {
      title: 'Kehadiran',
      value: '90%',
      icon: FiCalendar,
      color: 'bg-purple-500',
      change: 'Bulan ini'
    }
  ];

  const targets = [
    {
      title: 'Target Murojaah',
      value: 'Al-Baqarah 1-20',
      icon: FiRepeat,
      color: 'bg-indigo-500',
      deadline: 'Jumat, 25 Nov'
    },
    {
      title: 'Target Hafalan Baru',
      value: 'Al-Baqarah 21-25',
      icon: FiTarget,
      color: 'bg-red-500',
      deadline: 'Jumat, 25 Nov'
    },
    {
      title: 'Target Tahsin',
      value: 'Al-Imran 1-10',
      icon: FiFileText,
      color: 'bg-teal-500',
      deadline: 'Rabu, 23 Nov'
    }
  ];

  // Sample data for hafalan chart (pages memorized per day)
  const getHafalanChartData = () => {
    const days = parseInt(hafalanDateRange);
    const dates = [];
    const pages = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit' }));
      
      // Sample data - varying pages memorized per day
      const randomPages = Math.floor(Math.random() * 3) + (i % 3 === 0 ? 1 : 0);
      pages.push(randomPages);
    }
    
    return { dates, pages };
  };

  // Sample data for tahsin chart (pages read per day)
  const getTahsinChartData = () => {
    const days = parseInt(tahsinDateRange);
    const dates = [];
    const pages = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit' }));
      
      // Sample data - varying pages read per day
      const randomPages = Math.floor(Math.random() * 5) + (i % 2 === 0 ? 2 : 1);
      pages.push(randomPages);
    }
    
    return { dates, pages };
  };

  const hafalanChartData = getHafalanChartData();
  const tahsinChartData = getTahsinChartData();

  const hafalanChartOption = {
    title: {
      text: 'Progress Hafalan Harian',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} halaman'
    },
    xAxis: {
      type: 'category',
      data: hafalanChartData.dates,
      axisLabel: {
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      name: 'Halaman',
      axisLabel: {
        fontSize: 12
      }
    },
    series: [{
      data: hafalanChartData.pages,
      type: 'bar',
      itemStyle: {
        color: '#10b981'
      },
      emphasis: {
        itemStyle: {
          color: '#059669'
        }
      }
    }],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  const tahsinChartOption = {
    title: {
      text: 'Progress Tahsin Harian',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} halaman'
    },
    xAxis: {
      type: 'category',
      data: tahsinChartData.dates,
      axisLabel: {
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      name: 'Halaman',
      axisLabel: {
        fontSize: 12
      }
    },
    series: [{
      data: tahsinChartData.pages,
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#3b82f6'
      },
      lineStyle: {
        color: '#3b82f6',
        width: 3
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(59, 130, 246, 0.3)'
          }, {
            offset: 1, color: 'rgba(59, 130, 246, 0.1)'
          }]
        }
      }
    }],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  const hafalanHistory = [
    {
      date: '18 Nov 2023',
      surah: 'Al-Baqarah',
      ayat: '16-20',
      nilai: 8.5,
      catatan: 'Lancar, perhatikan tajwid pada ayat 18'
    },
    {
      date: '11 Nov 2023',
      surah: 'Al-Baqarah',
      ayat: '10-15',
      nilai: 9.0,
      catatan: 'Sangat lancar dan tajwid baik'
    },
    {
      date: '4 Nov 2023',
      surah: 'Al-Baqarah',
      ayat: '1-9',
      nilai: 8.0,
      catatan: 'Cukup lancar, perlu latihan lebih'
    },
    {
      date: '28 Okt 2023',
      surah: 'Al-Fatihah',
      ayat: '1-7',
      nilai: 9.5,
      catatan: 'Sempurna'
    }
  ];

  const murojaahHistory = [
    {
      date: '17 Nov 2023',
      surah: 'An-Nas - Al-Ikhlas',
      nilai: 9.0,
      catatan: 'Lancar'
    },
    {
      date: '10 Nov 2023',
      surah: 'Al-Kafirun - Al-Kautsar',
      nilai: 8.5,
      catatan: 'Beberapa kesalahan kecil'
    },
    {
      date: '3 Nov 2023',
      surah: 'Al-Maun - Al-Fil',
      nilai: 8.0,
      catatan: 'Perlu lebih banyak latihan'
    }
  ];

  const tahsinHistory = [
    {
      date: '16 Nov 2023',
      surah: 'Al-Imran',
      ayat: '1-5',
      nilai: 8.0,
      catatan: 'Perhatikan makharijul huruf'
    },
    {
      date: '9 Nov 2023',
      surah: 'Al-Baqarah',
      ayat: '255-257',
      nilai: 8.5,
      catatan: 'Tajwid baik, perlu perhatikan mad'
    },
    {
      date: '2 Nov 2023',
      surah: 'Al-Baqarah',
      ayat: '250-254',
      nilai: 7.5,
      catatan: 'Perlu latihan lebih untuk kelancaran'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'hafalan':
        return (
          <div className="space-y-3">
            {hafalanHistory.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.surah} {item.ayat}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      item.nilai >= 9 ? 'bg-green-100 text-green-800' :
                      item.nilai >= 8 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Nilai: {item.nilai}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Catatan:</span> {item.catatan}
                </p>
              </motion.div>
            ))}
          </div>
        );
      case 'murojaah':
        return (
          <div className="space-y-3">
            {murojaahHistory.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.surah}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      item.nilai >= 9 ? 'bg-green-100 text-green-800' :
                      item.nilai >= 8 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Nilai: {item.nilai}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Catatan:</span> {item.catatan}
                </p>
              </motion.div>
            ))}
          </div>
        );
      case 'tahsin':
        return (
          <div className="space-y-3">
            {tahsinHistory.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.surah} {item.ayat}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      item.nilai >= 9 ? 'bg-green-100 text-green-800' :
                      item.nilai >= 8 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Nilai: {item.nilai}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Catatan:</span> {item.catatan}
                </p>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Orang Tua</h1>
          <p className="text-gray-600 mt-1">Pantau progress hafalan anak Anda</p>
        </div>

        {/* Stats Grid - Current Progress */}
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hafalan Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Grafik Hafalan Harian</h3>
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiFilter} className="w-4 h-4 text-gray-400" />
                <select 
                  value={hafalanDateRange}
                  onChange={(e) => setHafalanDateRange(e.target.value)}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="7">7 Hari</option>
                  <option value="14">14 Hari</option>
                  <option value="30">30 Hari</option>
                </select>
              </div>
            </div>
            <ReactECharts 
              option={hafalanChartOption} 
              style={{ height: '300px' }}
              opts={{ renderer: 'svg' }}
            />
          </motion.div>

          {/* Tahsin Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Grafik Tahsin Harian</h3>
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiFilter} className="w-4 h-4 text-gray-400" />
                <select 
                  value={tahsinDateRange}
                  onChange={(e) => setTahsinDateRange(e.target.value)}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="7">7 Hari</option>
                  <option value="14">14 Hari</option>
                  <option value="30">30 Hari</option>
                </select>
              </div>
            </div>
            <ReactECharts 
              option={tahsinChartOption} 
              style={{ height: '300px' }}
              opts={{ renderer: 'svg' }}
            />
          </motion.div>
        </div>

        {/* Weekly Targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Target Minggu Ini</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {targets.map((target, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex items-start gap-4"
              >
                <div className={`${target.color} p-3 rounded-lg`}>
                  <SafeIcon icon={target.icon} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{target.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{target.value}</p>
                  <p className="text-xs text-red-600 mt-2">Tenggat: {target.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* History with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Riwayat Pembelajaran</h2>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button 
              onClick={() => setActiveTab('hafalan')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'hafalan' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiBook} className="w-4 h-4" />
                Hafalan Baru
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('murojaah')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'murojaah' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiRepeat} className="w-4 h-4" />
                Murojaah
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('tahsin')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'tahsin' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiFileText} className="w-4 h-4" />
                Tahsin
              </div>
            </button>
          </div>
          
          {/* Tab Content */}
          {renderTabContent()}
        </motion.div>

        {/* Child Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Informasi Anak</h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Aktif
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Ali Budi</h3>
                <p className="text-sm text-gray-600">Kelas 5A</p>
                <p className="text-sm text-gray-600">Kelompok Tahfidz: Mutqin</p>
                <p className="text-sm text-gray-600">Pembimbing: Ust. Ahmad</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Jadwal Tahfidz</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600"><span className="font-medium">Senin:</span> 07:30 - 09:00</p>
                    <p className="text-gray-600"><span className="font-medium">Rabu:</span> 07:30 - 09:00</p>
                  </div>
                  <div>
                    <p className="text-gray-600"><span className="font-medium">Jumat:</span> 07:30 - 09:00</p>
                    <p className="text-gray-600"><span className="font-medium">Lokasi:</span> Ruang Al-Ikhlas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default OrangTuaDashboard;