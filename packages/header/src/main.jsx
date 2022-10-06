import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';

const noop = () => {};

ReactDOM.render(
  <Header
    user={{ name: 'newtriks' }}
    onLogin={noop}
    onLogout={noop}
    onCreateAccount={noop}
  />,
  document.getElementById('root')
);
