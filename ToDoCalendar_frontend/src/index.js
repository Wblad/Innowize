import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'toastr/build/toastr.min.css';

import './consts/init.css';
import './consts/fonts.css';
import './consts/links.css';
import './consts/colors.css';
import './consts/scrollbar.css';
import './consts/toast.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  process.env.REACT_APP__USE_HASH_ROUTER === 'true' ? (
    <HashRouter>
      <App />
    </HashRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
