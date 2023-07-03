import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from "./store/configStore.js";
import { Provider } from 'react-redux';
import DesktopApp from './DesktopApp';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {window.innerWidth <= 786 ? <App /> : <DesktopApp />}
  </Provider>
);