import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>CV Creator</h1>
    </div>
    <Form />
  </React.StrictMode>
);