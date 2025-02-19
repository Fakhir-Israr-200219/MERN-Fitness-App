// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Signin from './pages/Signin';
import Login from './pages/Login';
import App from './App';
import Exercises from './pages/Exercises';
import Nutrition from './pages/Nutrition';
import Plans from './pages/Plans';
import Options from './pages/Options';
import Logs from './pages/Logs';
import Applayout from './Sheared/Applayout';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[ {
      path: "/exercises",
      element: <Exercises />,
    },
    {
      path: "/nutritions",
      element: <Nutrition />,
    },
    {
      path: "/plans",
      element: <Plans />,
    },
    {
      path: "/option",
      element: <Options />,
    },
    {
      path: "/logs",
      element: <Logs />,
    },
    {
      path: "/main",
      element: <Main />,
    },
  ]
  },
  {
    path:"/",
    element:<App/>
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
