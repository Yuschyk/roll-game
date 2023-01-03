import create from 'zustand';
import { devtools } from 'zustand/middleware';


export type TUser = {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    username: string;
    balance: number;
    role: 'User';
    stripeCustomerId: string;
}

export type UserStore = {
    user: TUser | null;
    actions: UserActions;
}

export type UserActions = {
    setUser: (user: TUser) => void;
}


const useUserStore = create<UserStore>()(devtools((set) => ({
  user: null,
  actions: {
    setUser: (user:TUser) => set(() => ({ user })),
  },
})));


export const useUser = () => (
  useUserStore((state) => state.user)
);
export const useUserActions = () => (
  useUserStore((state) => state.actions)
);

