import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import Header from "./components/Header";
import "/home/kamo/cv-creator/src/styles/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Form />
  </React.StrictMode>
);