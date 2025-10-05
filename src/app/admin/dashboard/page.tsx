'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiTrendingUp,
  FiEye,
  FiPlus,
  FiActivity,
  FiBarChart,
  FiSettings,
  FiRefreshCw,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';

interface Stats {
  teamMembers: number;
  projects: number;
  blogPosts: number;
  inquiries: number;
  totalUsers: number;
  activeUsers: number;
  // Add change indicators
  teamMembersChange?: number;
  projectsChange?: number;
  blogPostsChange?: number;
  inquiriesChange?: number;
}

interface Analytics {
  monthlyVisitors: number;
  pageViews: number;
  conversionRate: number;
  teamGrowth: number;
  projectSuccess: number;
  contentEngagement: number;
  recentActivity: number;
}

interface ActivityItem {
  id: string;
  type: 'create' | 'update' | 'delete';
  entity: string;
  description: string;
  user: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
}

interface QuickAction {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  count?: number;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats>({
    teamMembers: 0,
    projects: 0,
    blogPosts: 0,
    inquiries: 0,
    totalUsers: 0,
    activeUsers: 0,
  });
  const [analytics, setAnalytics] = useState<Analytics>({
    monthlyVisitors: 0,
    pageViews: 0,
    conversionRate: 0,
    teamGrowth: 0,
    projectSuccess: 0,
    contentEngagement: 0,
    recentActivity: 0,
  });
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log('Fetching dashboard data...');

      // Fetch real data from API endpoints
      const [statsResponse, activitiesResponse, analyticsResponse] =
        await Promise.all([
          fetch('/api/admin/dashboard/stats'),
          fetch('/api/admin/dashboard/activities'),
          fetch('/api/admin/dashboard/analytics'),
        ]);

      console.log('API Responses:', {
        stats: statsResponse.status,
        activities: activitiesResponse.status,
        analytics: analyticsResponse.status,
      });

      if (statsResponse.ok && activitiesResponse.ok && analyticsResponse.ok) {
        const statsData = await statsResponse.json();
        const activitiesData = await activitiesResponse.json();
        const analyticsData = await analyticsResponse.json();

        console.log('Dashboard data received:', {
          stats: statsData,
          activities: activitiesData,
          analytics: analyticsData,
        });

        setStats(statsData);
        setActivities(activitiesData);
        setAnalytics(analyticsData);
      } else {
        console.error('Failed to fetch dashboard data:', {
          stats: statsResponse.status,
          activities: activitiesResponse.status,
          analytics: analyticsResponse.status,
        });

        // Try to get error details
        const statsError = await statsResponse.text();
        const activitiesError = await activitiesResponse.text();
        const analyticsError = await analyticsResponse.text();

        console.error('Error details:', {
          stats: statsError,
          activities: activitiesError,
          analytics: analyticsError,
        });
      }
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      name: 'Team Members',
      value: stats.teamMembers,
      icon: FiUsers,
      color: 'bg-blue-500',
      href: '/admin/team',
      change: stats.teamMembersChange
        ? `+${stats.teamMembersChange} this month`
        : 'Active members',
      changeType: 'positive' as const,
    },
    {
      name: 'Projects',
      value: stats.projects,
      icon: FiBriefcase,
      color: 'bg-green-500',
      href: '/admin/projects',
      change: stats.projectsChange
        ? `+${stats.projectsChange} this month`
        : 'Published projects',
      changeType: 'positive' as const,
    },
    {
      name: 'Blog Posts',
      value: stats.blogPosts,
      icon: FiFileText,
      color: 'bg-purple-500',
      href: '/admin/blog',
      change: stats.blogPostsChange
        ? `+${stats.blogPostsChange} this week`
        : 'Published posts',
      changeType: 'positive' as const,
    },
    {
      name: 'Inquiries',
      value: stats.inquiries,
      icon: FiMail,
      color: 'bg-orange-500',
      href: '/admin/inquiries',
      change: stats.inquiriesChange
        ? `+${stats.inquiriesChange} today`
        : 'Total inquiries',
      changeType: 'positive' as const,
    },
  ];

  const quickActions: QuickAction[] = [
    {
      title: 'Add Team Member',
      description: 'Add new team member profile',
      href: '/admin/team/new',
      icon: FiUsers,
      color: 'bg-blue-500',
    },
    {
      title: 'Create Project',
      description: 'Add new project to portfolio',
      href: '/admin/projects/new',
      icon: FiBriefcase,
      color: 'bg-green-500',
    },
    {
      title: 'Write Blog Post',
      description: 'Create new blog content',
      href: '/admin/blog/new',
      icon: FiFileText,
      color: 'bg-purple-500',
    },
    {
      title: 'Manage Settings',
      description: 'Configure website settings',
      href: '/admin/settings',
      icon: FiSettings,
      color: 'bg-gray-500',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'create':
        return FiPlus;
      case 'update':
        return FiEdit;
      case 'delete':
        return FiTrash2;
      default:
        return FiActivity;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-500';
      case 'warning':
        return 'text-orange-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor(
      (now.getTime() - time.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg bg-white p-6 shadow"
            >
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-8 w-1/2 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {session?.user?.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your website today.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-sm text-gray-500">
            <FiClock className="mr-1 h-4 w-4" />
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <button
            onClick={fetchDashboardData}
            className="flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            <FiRefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="group block rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:shadow-md hover:ring-gray-300"
            >
              <div className="flex items-center">
                <div className={`rounded-lg p-3 ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Activity
              </h3>
              <Link
                href="/admin/activity"
                className="text-sm text-primary hover:text-primary-dark"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {activities.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div
                      className={`rounded-full p-2 ${getActivityColor(activity.status)} bg-gray-50`}
                    >
                      <ActivityIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900">
                        {activity.description}
                      </p>
                      <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                        <span>by {activity.user}</span>
                        <span>•</span>
                        <span>{formatTimeAgo(activity.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action) => {
                const ActionIcon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex items-center rounded-lg border-2 border-dashed border-gray-300 p-4 transition-colors hover:border-primary hover:bg-gray-50"
                  >
                    <div className={`rounded-lg p-2 ${action.color}`}>
                      <ActionIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {action.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* System Status */}
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiCheckCircle className="h-4 w-4 text-green-500" />
                  <span className="ml-2 text-sm text-gray-900">Website</span>
                </div>
                <span className="text-xs text-green-600">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiCheckCircle className="h-4 w-4 text-green-500" />
                  <span className="ml-2 text-sm text-gray-900">Database</span>
                </div>
                <span className="text-xs text-green-600">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiAlertCircle className="h-4 w-4 text-orange-500" />
                  <span className="ml-2 text-sm text-gray-900">Backups</span>
                </div>
                <span className="text-xs text-orange-600">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          Analytics Overview
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <FiTrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {analytics.monthlyVisitors.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">Monthly Visitors</p>
            <p className="text-xs text-green-600">Based on inquiries</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <FiEye className="h-8 w-8 text-blue-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {analytics.pageViews.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">Page Views</p>
            <p className="text-xs text-blue-600">Estimated from activity</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <FiBarChart className="h-8 w-8 text-purple-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {analytics.conversionRate}%
            </p>
            <p className="text-sm text-gray-600">Conversion Rate</p>
            <p className="text-xs text-purple-600">Inquiries to projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
