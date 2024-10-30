import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx';
import Contact from './components/Contact.jsx';
import NotFound404 from './components/NotFound404.jsx';
import MainContent from './components/MainContent.jsx';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: '/',
        element: <MainContent />,
      },
      {
        path: '/#app-features',
        element: <MainContent />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>
);
