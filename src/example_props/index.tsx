import { useState } from 'react';

import { Lamp } from '../Utils/Lamp.tsx';

// const theme = 'dark'; // light or dark

export const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <div data-bs-theme={theme}>
      <div className="container">
        <div className="h-100 py-4 gx-4">
          <div
            className="bg-body-tertiary p-3 rounded-2 d-flex flex-column"
            style={{ minHeight: 'calc(100vh - 3rem)' }}
          >
            <Header onChange={setTheme} />
            <Content theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ onChange }: any) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h5>Header</h5>
      <ToggleTheme onChange={onChange} />
    </div>
  );
};

const ToggleTheme = ({ onChange }: any) => {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg"
      onClick={() => onChange(prev => (prev === 'dark' ? 'light' : 'dark'))}
    >
      <Lamp />
      Toggle theme
    </button>
  );
};

const Content = ({ theme }: any) => {
  return (
    <Wrapper theme={theme}>
      <Wrapper theme={theme}>
        <Textarea />
      </Wrapper>
      <Wrapper theme={theme}>
        <TextField />
      </Wrapper>
    </Wrapper>
  );
};

const Wrapper = ({ theme, children }: any) => {
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
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur, assumenda
      corporis cum cupiditate deleniti distinctio et excepturi exercitationem, molestiae pariatur
      quam quos repellendus sint tempore. Eveniet itaque mollitia quam!
    </p>
  );
};

const Textarea = () => {
  return (
    <div className="input-group">
      <textarea className="form-control" rows={6} />
    </div>
  );
};
