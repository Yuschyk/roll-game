import { nanoid } from 'nanoid';
import create from 'zustand';
import { devtools } from 'zustand/middleware';


export type TNotification = {
    id: string;
    title: string;
    text: string;
    type: 'success' | 'info' | 'warning' | 'error';
}

type TNotificationStore = {
    notifications: TNotification[] | [];
    actions: TNotificationStoreActions;
}

type TNotificationStoreActions = {
    createNotification: (notification:Omit<TNotification, 'id'>) => void;
    removeNotification: (notificationId: string) => void;
}

const useNotificationStore = create<TNotificationStore>()(devtools(
  (set) => ({
    notifications: [],
    actions: {
      createNotification: (notification) => set((store) => ({
        notifications: [...store.notifications, {
          ...notification,
          id: nanoid(),
        }],
      })),
      removeNotification: (notificationId) => set((store) => ({
        notifications: store.notifications.filter((element) => element.id !== notificationId),
      })),
    },
  }),
));

export const useNotifications = () => (
  useNotificationStore((state) => state.notifications)
);

export const useNotificationActions = () => (
  useNotificationStore((state) => state.actions)
);

export const useCreateNotification = () => (
  useNotificationStore((state) => state.actions.createNotification)
);
