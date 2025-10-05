'use client';

import { useState, useEffect } from 'react';
import {
  FiSave,
  FiGlobe,
  FiMail,
  FiShield,
  FiImage,
  FiCode,
  FiDatabase,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';

interface SettingsData {
  general: {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    ogImage: string;
    twitterHandle: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  email: {
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
  security: {
    enableTwoFactor: boolean;
    sessionTimeout: number;
    maxLoginAttempts: number;
    passwordMinLength: number;
  };
  maintenance: {
    maintenanceMode: boolean;
    maintenanceMessage: string;
    allowedIPs: string;
  };
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [settings, setSettings] = useState<SettingsData>({
    general: {
      siteName: 'ZMS IT Hub',
      siteDescription: 'Leading software development company in Pakistan',
      siteUrl: 'https://zmsithub.com',
      contactEmail: 'info@zmsithub.com',
      contactPhone: '+92 300 1234567',
      address: 'Karachi, Pakistan',
    },
    seo: {
      metaTitle: 'ZMS IT Hub - Software Development Company',
      metaDescription:
        'Professional software development services including web development, mobile apps, and custom solutions.',
      keywords: 'software development, web development, mobile apps, Pakistan',
      ogImage: '/images/og-image.jpg',
      twitterHandle: '@zmsithub',
    },
    social: {
      facebook: 'https://facebook.com/zmsithub',
      twitter: 'https://twitter.com/zmsithub',
      linkedin: 'https://linkedin.com/company/zmsithub',
      instagram: 'https://instagram.com/zmsithub',
      youtube: 'https://youtube.com/@zmsithub',
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: '587',
      smtpUser: '',
      smtpPassword: '',
      fromEmail: 'noreply@zmsithub.com',
      fromName: 'ZMS IT Hub',
    },
    security: {
      enableTwoFactor: false,
      sessionTimeout: 24,
      maxLoginAttempts: 5,
      passwordMinLength: 8,
    },
    maintenance: {
      maintenanceMode: false,
      maintenanceMessage: 'We are currently performing scheduled maintenance.',
      allowedIPs: '127.0.0.1',
    },
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/settings');

      if (response.ok) {
        const data = await response.json();
        // Update settings state with fetched data
        setSettings((prevSettings) => ({
          ...prevSettings,
          ...data,
        }));
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSaveMessage({
          type: 'success',
          message: 'Settings saved successfully!',
        });
      } else {
        throw new Error('Failed to save settings');
      }

      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      setSaveMessage({
        type: 'error',
        message: 'Failed to save settings. Please try again.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const updateSetting = (
    section: keyof SettingsData,
    field: string,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const tabs = [
    { id: 'general', name: 'General', icon: FiGlobe },
    { id: 'seo', name: 'SEO', icon: FiCode },
    { id: 'social', name: 'Social Media', icon: FiImage },
    { id: 'email', name: 'Email', icon: FiMail },
    { id: 'security', name: 'Security', icon: FiShield },
    { id: 'maintenance', name: 'Maintenance', icon: FiDatabase },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
        <div className="animate-pulse rounded-lg bg-white p-6 shadow">
          <div className="space-y-4">
            <div className="h-4 w-1/4 rounded bg-gray-200"></div>
            <div className="h-10 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-1/3 rounded bg-gray-200"></div>
            <div className="h-10 w-full rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage your website configuration and preferences
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {saveMessage && (
            <div
              className={`flex items-center rounded-lg px-3 py-2 text-sm ${
                saveMessage.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {saveMessage.type === 'success' ? (
                <FiCheck className="mr-2 h-4 w-4" />
              ) : (
                <FiAlertCircle className="mr-2 h-4 w-4" />
              )}
              {saveMessage.message}
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Saving...
              </>
            ) : (
              <>
                <FiSave className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Sidebar */}
        <div className="lg:w-64">
          <nav className="space-y-1 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  General Settings
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={settings.general.siteName}
                      onChange={(e) =>
                        updateSetting('general', 'siteName', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site URL
                    </label>
                    <input
                      type="url"
                      value={settings.general.siteUrl}
                      onChange={(e) =>
                        updateSetting('general', 'siteUrl', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Site Description
                    </label>
                    <textarea
                      rows={3}
                      value={settings.general.siteDescription}
                      onChange={(e) =>
                        updateSetting(
                          'general',
                          'siteDescription',
                          e.target.value
                        )
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={settings.general.contactEmail}
                      onChange={(e) =>
                        updateSetting('general', 'contactEmail', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={settings.general.contactPhone}
                      onChange={(e) =>
                        updateSetting('general', 'contactPhone', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      value={settings.general.address}
                      onChange={(e) =>
                        updateSetting('general', 'address', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEO Settings */}
            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  SEO Settings
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={settings.seo.metaTitle}
                      onChange={(e) =>
                        updateSetting('seo', 'metaTitle', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={settings.seo.metaDescription}
                      onChange={(e) =>
                        updateSetting('seo', 'metaDescription', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Keywords
                    </label>
                    <input
                      type="text"
                      value={settings.seo.keywords}
                      onChange={(e) =>
                        updateSetting('seo', 'keywords', e.target.value)
                      }
                      placeholder="Separate keywords with commas"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Open Graph Image URL
                    </label>
                    <input
                      type="url"
                      value={settings.seo.ogImage}
                      onChange={(e) =>
                        updateSetting('seo', 'ogImage', e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Twitter Handle
                    </label>
                    <input
                      type="text"
                      value={settings.seo.twitterHandle}
                      onChange={(e) =>
                        updateSetting('seo', 'twitterHandle', e.target.value)
                      }
                      placeholder="@username"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Security Settings
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Enable Two-Factor Authentication
                      </label>
                      <p className="text-sm text-gray-500">
                        Require 2FA for all admin users
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        updateSetting(
                          'security',
                          'enableTwoFactor',
                          !settings.security.enableTwoFactor
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.security.enableTwoFactor
                          ? 'bg-primary'
                          : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.security.enableTwoFactor
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Session Timeout (hours)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="168"
                        value={settings.security.sessionTimeout}
                        onChange={(e) =>
                          updateSetting(
                            'security',
                            'sessionTimeout',
                            parseInt(e.target.value)
                          )
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Max Login Attempts
                      </label>
                      <input
                        type="number"
                        min="3"
                        max="10"
                        value={settings.security.maxLoginAttempts}
                        onChange={(e) =>
                          updateSetting(
                            'security',
                            'maxLoginAttempts',
                            parseInt(e.target.value)
                          )
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Minimum Password Length
                      </label>
                      <input
                        type="number"
                        min="6"
                        max="20"
                        value={settings.security.passwordMinLength}
                        onChange={(e) =>
                          updateSetting(
                            'security',
                            'passwordMinLength',
                            parseInt(e.target.value)
                          )
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Maintenance Settings */}
            {activeTab === 'maintenance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Maintenance Settings
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Maintenance Mode
                      </label>
                      <p className="text-sm text-gray-500">
                        Enable to show maintenance page to visitors
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        updateSetting(
                          'maintenance',
                          'maintenanceMode',
                          !settings.maintenance.maintenanceMode
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.maintenance.maintenanceMode
                          ? 'bg-orange-500'
                          : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.maintenance.maintenanceMode
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Maintenance Message
                    </label>
                    <textarea
                      rows={3}
                      value={settings.maintenance.maintenanceMessage}
                      onChange={(e) =>
                        updateSetting(
                          'maintenance',
                          'maintenanceMessage',
                          e.target.value
                        )
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Allowed IP Addresses
                    </label>
                    <input
                      type="text"
                      value={settings.maintenance.allowedIPs}
                      onChange={(e) =>
                        updateSetting(
                          'maintenance',
                          'allowedIPs',
                          e.target.value
                        )
                      }
                      placeholder="Separate IPs with commas"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      IP addresses that can access the site during maintenance
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
