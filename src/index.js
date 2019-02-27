import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootEl = window.document.getElementById('root');

if (rootEl) {
  ReactDOM.render(
    <App />,
    rootEl,
  );
}
