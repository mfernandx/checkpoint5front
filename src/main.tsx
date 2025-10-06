import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/Home.tsx'
import Formulario from './routes/formulario/Formulario.tsx'
import Funcionarios from './routes/listaFuncionario/Funcionarios.tsx'
import Error from './routes/error/Error.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/listaFuncionario",
        element:<Funcionarios/>
      },
      {
        path:"/formulario",
        element:<Formulario/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
