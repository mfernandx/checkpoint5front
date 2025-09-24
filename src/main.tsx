import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/index.tsx'
import Formulario from './routes/formulario/index.tsx'
import ListaFuncionario from './routes/listaFuncionario/index.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/', element:<Home/>},
    {path:'/incluir', element:<ListaFuncionario/>},
    {path:'/editar/:id', element:<Formulario/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
