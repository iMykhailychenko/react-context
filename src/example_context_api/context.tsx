import { createContext, useContext, useState } from 'react';

const AppStore = createContext(null);

export const AppStoreProved = ({ children }: any) => {
  const [state, setState] = useState({
    theme: 'dark',
    text: '',
  });

  return <AppStore.Provider value={{ state, setState }}>{children}</AppStore.Provider>;
};

export const useAppStore = () => useContext(AppStore);

console.log(AppStore);
