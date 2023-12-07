import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Info from './Pages/Info/Info';
import Plan from './Pages/Plan/Plan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Info />,
      },
      {
        path: '/step/2',
        element: <Plan />,
      },
    ],
  },

]);

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <RouterProvider router={router} />,
);
