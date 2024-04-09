/// <reference types="vite/client" />

declare global {
  interface Window {
    console: {
      oops: () => void;
    };
  }
}
