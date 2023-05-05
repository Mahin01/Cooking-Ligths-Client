import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import AuthProviders, { AuthContext } from '../providers/AuthProviders';
import ChefRecipe from './views/ChefRecipe/ChefRecipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }, 
      {
        path: "/register",
        element: <SignUp></SignUp>
      },
      {
        path: "/chef-recipe/:id",
        element: <ChefRecipe></ChefRecipe>, 
        loader: ({params}) => fetch(`http://localhost:5000/chefsData/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
