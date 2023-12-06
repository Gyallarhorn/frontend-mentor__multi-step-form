import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contact />,
      },
    ],
  },

]);

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <RouterProvider router={router} />,
);
