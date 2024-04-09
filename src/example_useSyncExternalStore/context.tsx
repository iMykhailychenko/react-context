import { createContext, useCallback, useContext, useRef, useSyncExternalStore } from 'react';

const AppStore = createContext({});

export const AppStoreProved = ({ children }: any) => {
  const store = useRef({
    theme: 'dark',
    text: '',
  });

  const subscribes = useRef(new Set());

  const get = useCallback(() => store.current, []);

  const set = useCallback((state: any) => {
    store.current = { ...store.current, ...state };
    subscribes.current.forEach((subscribe: any) => subscribe());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribes.current.add(callback);
    return () => {
      subscribes.current.delete(callback);
    };
  }, []);

  return <AppStore.Provider value={{ get, set, subscribe }}>{children}</AppStore.Provider>;
};

export const useSelector = (selector: (value: any) => any) => {
  const { get, subscribe } = useContext(AppStore);

  return useSyncExternalStore(subscribe, () => selector(get()));
};

export const useDispatch = () => {
  return (useContext(AppStore) as any).set;
};
