import create from 'zustand';
import { devtools } from 'zustand/middleware';


export type UserStore = {
    user: any;
}

type UserActions = {
    setUser: (user:any) => void;
}

const useUserStore = create<UserStore & UserActions>((set) => ({
  user: null,
  setUser: (user:any) => set(() => ({ user })),
}));
