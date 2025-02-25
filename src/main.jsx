import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Produto from './routes/Produto.jsx'
import Carrinho from './routes/Carrinho.jsx'
import Perfil from './routes/Perfil.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/produto/:id',
        element: <Produto />
      },
      {
        path: '/carrinho',
        element: <Carrinho />
      },
      {
        path: '/perfil',
        element: <Perfil />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
