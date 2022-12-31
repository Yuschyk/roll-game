import { useUserStore } from './store';


const getUser = () => useUserStore((state) => state.user);

export const userSelectors = {
  getUser,
};
