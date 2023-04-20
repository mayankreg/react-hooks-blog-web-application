import React from 'react';
import ReactDOM from 'react-dom/client';

// this style file is added to header via webpack & is !scoped to any particular component..rather to whole application
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
  // </React.StrictMode>
);

