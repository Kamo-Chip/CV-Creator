import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import "/home/kamo/cv-creator/src/styles/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1 id="header1">CV Creator</h1>
    </div>
    <Form />
  </React.StrictMode>
);