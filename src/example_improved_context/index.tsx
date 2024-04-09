import { Lamp } from '../Utils/Lamp.tsx';

import { AppStoreProved, useSelector, useDispatch } from './context.tsx';

// const theme = 'dark'; // light or dark

export const App = () => {
  return (
    <AppStoreProved>
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
    </AppStoreProved>
  );
};

const ThemeWrapper = ({ children }: any) => {
  const theme = useSelector(state => state.theme);

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
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  console.oops();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg"
      onClick={() => dispatch({ theme: theme === 'dark' ? 'light' : 'dark' })}
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
  const theme = useSelector(state => state.theme);

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
  const text = useSelector(state => state.text);
  return <p>{text}</p>;
};

const Textarea = () => {
  const text = useSelector(state => state.text);
  const dispatch = useDispatch();

  return (
    <div className="input-group">
      <textarea
        className="form-control"
        rows={6}
        value={text}
        onChange={e => dispatch({ text: e.target.value })}
      />
    </div>
  );
};
