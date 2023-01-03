import React, { FC, useEffect } from 'react';

import { AlertTitle, Alert as MuiAlert } from '@mui/material';

import { TNotification, useNotificationActions, useNotifications } from '../model';


export const Notification:FC = ():JSX.Element => {
  const notifications = useNotifications();
  const { removeNotification } = useNotificationActions();

  const handleClose = (notificationId: string) => {
    removeNotification(notificationId);
  };

  return (
    <div
      style={{ position: 'fixed', right: '10px', bottom: '10px' }}
    >
      {notifications.length > 0
            && notifications.map((notification, index) => (
              <NotificationsProvider
                key={notification.id + index}
                notification={notification}
                handleClose={handleClose}
              />
            ))}
    </div>
  );
};

type TNotificationProvider = {
  duration?: number;
  notification: TNotification;
  handleClose: (id: string) => void;
}
const NotificationsProvider:FC<TNotificationProvider> = ({ duration = 5000, notification, handleClose }):JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => handleClose(notification.id), duration);
    return () => {
      clearTimeout(timer);
    };
  }, [notification, duration, handleClose]);

  return (
    <MuiAlert
      style={{ marginBottom: '6px', minWidth: '250px' }}
      onClose={() => handleClose(notification.id)}
      id={notification.id}
      elevation={6}
      variant="filled"
      severity={notification.type}
    >
      <AlertTitle>{notification.title}</AlertTitle>
      {notification.text}
    </MuiAlert>
  );
};
