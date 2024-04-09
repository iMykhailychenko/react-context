import { useEffect, useState } from 'react';

import PubSub from 'pubsub-js';

import { Lamp } from '../Utils/Lamp.tsx';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    PubSub.subscribe('theme', () => setTheme(prev => (prev === 'light' ? 'dark' : 'light')));
  }, []);

  return theme;
};

const useText = () => {
  const [text, setText] = useState('dark');

  useEffect(() => {
    PubSub.subscribe('text', (_, newText) => {
      setText(newText);
    });
  }, []);

  return text;
};

export const App = () => {
  return (
    <ThemeWrapper>
      <div className="container">
        <div className="h-100 py-4 gx-4">
          <div
            className="bg-body-tertiary p-3 rounded-2 d-flex flex-column"
            style={{ minHeight: 'calc(100vh - 3rem)' }}
          >
            <Header />
            <Content />
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
};

const ThemeWrapper = ({ children }: any) => {
  const theme = useTheme();

  return <div data-bs-theme={theme}>{children}</div>;
};

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h5>Header</h5>
      <ToggleTheme />
    </div>
  );
};

const ToggleTheme = () => {
  console.oops();
  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg"
      onClick={() => PubSub.publish('theme')}
    >
      <Lamp />
      Toggle theme
    </button>
  );
};

const Content = () => {
  return (
    <Wrapper>
      <Wrapper>
        <Textarea />
      </Wrapper>
      <Wrapper>
        <TextField />
      </Wrapper>
    </Wrapper>
  );
};

const Wrapper = ({ children }: any) => {
  const theme = useTheme();

  const border = theme === 'dark' ? 'border-white' : 'border-dark';
  return (
    <div className={`d-flex flex-column border rounded-2 m-4 p-4 ${border}`} style={{ flex: '1' }}>
      <h5 className="mb-4">Wrapper</h5>
      <div className="d-flex flex-column" style={{ flex: '1' }}>
        {children}
      </div>
    </div>
  );
};

const TextField = () => {
  const text = useText();

  return <p>{text}</p>;
};

const Textarea = () => {
  const text = useText();

  return (
    <div className="input-group">
      <textarea
        className="form-control"
        rows={6}
        value={text}
        onChange={e => PubSub.publish('text', e.target.value)}
      />
    </div>
  );
};
