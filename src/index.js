import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

const root = document.getElementById('root');

render(app, root);
