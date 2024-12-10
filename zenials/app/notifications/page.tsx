import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NotificationItem from '../components/NotificationItem';

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch notifications from the backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        setNotifications(data.notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <>
      <Head>
        <title>Notifications | Zenials</title>
        <meta name="description" content="Stay updated with your notifications on Zenials." />
        <meta name="keywords" content="Zenials, notifications, updates, alerts" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-indigo-600 text-center mb-8">Notifications</h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading notifications...</p>
          ) : notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  title={notification.title}
                  description={notification.description}
                  time={notification.time}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No notifications to show.</p>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotificationsPage;
