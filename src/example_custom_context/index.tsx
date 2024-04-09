import { FC, useState } from 'react';

function createContext(initialValue: any) {
  const _currentValue = initialValue;

  const context: any = {
    Provider: () => null,
    $$typeof: Symbol.for('react.context'),
    _currentValue,
  };

  context.Provider = ({ children, value }: any) => {
    context._currentValue = value;
    return children;
  };

  return context;
}

const useContext = (ctx: any) => ctx._currentValue;

const AppContext = createContext({ count: 0, setCount: () => null });

export const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <Inner />
    </AppContext.Provider>
  );
};

const Inner = () => {
  const { count, setCount } = useContext(AppContext);

  return (
    <div className="container">
      <div className="h-100 py-4 gx-4">
        <div
          className="bg-body-tertiary p-3 rounded-2 d-flex flex-column"
          style={{ minHeight: 'calc(100vh - 3rem)' }}
        >
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};
