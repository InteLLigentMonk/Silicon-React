import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx';
import Contact from './components/Contact.jsx';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>
);
