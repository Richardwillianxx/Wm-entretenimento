import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBarComponent from './components/NavBarComponent';
import LoginComponent from './components/LoginComponent';
import CadastroComponent from './components/CadastroComponent';
import FilmesPage from './pages/FilmesPage';
import LivrosPage from './pages/BookPage';
import InfoPage from './pages/InfoPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element: <LoginComponent/>,
  },
  {
    path: "/cadastrar",
    element: <CadastroComponent/>,
  },
  {
    path: "/filmes",
    element: <FilmesPage/>,
  },
  {
    path: "/livros",
    element: <LivrosPage/>,
  },
  {
    path: "/informacoes",
    element: <InfoPage/>,
  },
 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBarComponent/>  
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
