import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Info from './Pages/Info/Info';
import Plan from './Pages/Plan/Plan';
import AddOns from './Pages/AddOns/AddOns';
import Finishing from './Pages/Finishing/Finishing';
import NotFound from './Pages/NotFound/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Info />,
      },
      {
        path: '/plan',
        element: <Plan />,
      },
      {
        path: '/addOns',
        element: <AddOns />,
      },
      {
        path: '/finishing',
        element: <Finishing />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <RouterProvider router={router} />,
);
