import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './index.scss'
import Root from './routes/root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path: "/movie/:id",
      element: <MovieDetail />,
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)