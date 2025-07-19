import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBell, FiMail, FiMessageCircle, FiToggleLeft, FiToggleRight, FiSave, FiCheck } = FiIcons;

const NotificationCenter = () => {
  const [emailSettings, setEmailSettings] = useState({
    enabled: false,
    email: '',
    murojaahReminder: false,
    hafalanNotification: false,
    tahsinNotification: false
  });

  const [whatsappSettings, setWhatsappSettings] = useState({
    enabled: false,
    phone: '',
    murojaahReminder: false,
    hafalanNotification: false,
    tahsinNotification: false
  });

  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  const handleEmailToggle = (field) => {
    if (field === 'enabled') {
      setEmailSettings(prev => ({
        ...prev,
        enabled: !prev.enabled,
        // Reset sub-settings if disabling
        ...(prev.enabled ? {
          murojaahReminder: false,
          hafalanNotification: false,
          tahsinNotification: false
        } : {})
      }));
    } else {
      setEmailSettings(prev => ({
        ...prev,
        [field]: !prev[field]
      }));
    }
  };

  const handleWhatsappToggle = (field) => {
    if (field === 'enabled') {
      setWhatsappSettings(prev => ({
        ...prev,
        enabled: !prev.enabled,
        // Reset sub-settings if disabling
        ...(prev.enabled ? {
          murojaahReminder: false,
          hafalanNotification: false,
          tahsinNotification: false
        } : {})
      }));
    } else {
      setWhatsappSettings(prev => ({
        ...prev,
        [field]: !prev[field]
      }));
    }
  };

  const handleSaveSettings = () => {
    // Here you would typically save to backend/localStorage
    console.log('Email Settings:', emailSettings);
    console.log('WhatsApp Settings:', whatsappSettings);
    
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };

  const ToggleButton = ({ enabled, onClick }) => (
    <button
      onClick={onClick}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-red-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pusat Notifikasi</h1>
            <p className="text-gray-600 mt-1">Kelola pengaturan notifikasi Anda</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveSettings}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <SafeIcon icon={FiSave} className="w-4 h-4" />
            Simpan Pengaturan
          </motion.button>
        </div>

        {/* Success Message */}
        {showSaveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
          >
            <SafeIcon icon={FiCheck} className="w-5 h-5" />
            Pengaturan berhasil disimpan!
          </motion.div>
        )}

        {/* Email Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <SafeIcon icon={FiMail} className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Notifikasi Email</h2>
                <p className="text-sm text-gray-600">Terima notifikasi melalui email</p>
              </div>
            </div>
            <ToggleButton 
              enabled={emailSettings.enabled} 
              onClick={() => handleEmailToggle('enabled')} 
            />
          </div>

          {emailSettings.enabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  value={emailSettings.email}
                  onChange={(e) => setEmailSettings(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Masukkan alamat email Anda"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Email Notification Options */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Jenis Notifikasi Email</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Reminder Waktu Murojaah</p>
                    <p className="text-sm text-gray-600">Pengingat jadwal murojaah harian</p>
                  </div>
                  <ToggleButton 
                    enabled={emailSettings.murojaahReminder} 
                    onClick={() => handleEmailToggle('murojaahReminder')} 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifikasi Hafalan Baru</p>
                    <p className="text-sm text-gray-600">Pemberitahuan saat ada hafalan baru</p>
                  </div>
                  <ToggleButton 
                    enabled={emailSettings.hafalanNotification} 
                    onClick={() => handleEmailToggle('hafalanNotification')} 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifikasi Setoran Tahsin</p>
                    <p className="text-sm text-gray-600">Pemberitahuan saat ada setoran tahsin baru</p>
                  </div>
                  <ToggleButton 
                    enabled={emailSettings.tahsinNotification} 
                    onClick={() => handleEmailToggle('tahsinNotification')} 
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* WhatsApp Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Notifikasi WhatsApp</h2>
                <p className="text-sm text-gray-600">Terima notifikasi melalui WhatsApp</p>
              </div>
            </div>
            <ToggleButton 
              enabled={whatsappSettings.enabled} 
              onClick={() => handleWhatsappToggle('enabled')} 
            />
          </div>

          {whatsappSettings.enabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +62
                  </span>
                  <input
                    type="tel"
                    value={whatsappSettings.phone}
                    onChange={(e) => setWhatsappSettings(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="8123456789"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Contoh: 8123456789 (tanpa tanda +62)</p>
              </div>

              {/* WhatsApp Notification Options */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Jenis Notifikasi WhatsApp</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Reminder Waktu Murojaah</p>
                    <p className="text-sm text-gray-600">Pengingat jadwal murojaah harian</p>
                  </div>
                  <ToggleButton 
                    enabled={whatsappSettings.murojaahReminder} 
                    onClick={() => handleWhatsappToggle('murojaahReminder')} 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifikasi Hafalan Baru</p>
                    <p className="text-sm text-gray-600">Pemberitahuan saat ada hafalan baru</p>
                  </div>
                  <ToggleButton 
                    enabled={whatsappSettings.hafalanNotification} 
                    onClick={() => handleWhatsappToggle('hafalanNotification')} 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifikasi Setoran Tahsin</p>
                    <p className="text-sm text-gray-600">Pemberitahuan saat ada setoran tahsin baru</p>
                  </div>
                  <ToggleButton 
                    enabled={whatsappSettings.tahsinNotification} 
                    onClick={() => handleWhatsappToggle('tahsinNotification')} 
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Recent Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <SafeIcon icon={FiBell} className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Notifikasi Terbaru</h2>
          </div>
          
          <div className="space-y-3">
            {[
              {
                title: 'Hafalan Baru Tersimpan',
                message: 'Ali Budi telah menyelesaikan hafalan Al-Baqarah ayat 16-20 dengan nilai 8.5',
                time: '2 jam yang lalu',
                type: 'hafalan'
              },
              {
                title: 'Reminder Murojaah',
                message: 'Waktunya murojaah! Jangan lupa untuk mengulang hafalan hari ini.',
                time: '5 jam yang lalu',
                type: 'reminder'
              },
              {
                title: 'Setoran Tahsin Baru',
                message: 'Ali Budi telah melakukan setoran tahsin Al-Imran ayat 1-5 dengan nilai 8.0',
                time: '1 hari yang lalu',
                type: 'tahsin'
              }
            ].map((notification, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-lg ${
                  notification.type === 'hafalan' ? 'bg-green-100' :
                  notification.type === 'reminder' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  <SafeIcon 
                    icon={
                      notification.type === 'hafalan' ? FiBook :
                      notification.type === 'reminder' ? FiBell :
                      FiFileText
                    } 
                    className={`w-4 h-4 ${
                      notification.type === 'hafalan' ? 'text-green-600' :
                      notification.type === 'reminder' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotificationCenter;