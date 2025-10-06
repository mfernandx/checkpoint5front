import { Outlet } from "react-router-dom";
import Navegador from "./components/Navegador";
import Rodape from "./components/Rodape";

export default function App(){

  return(
  <>
  <Navegador/>
  <Outlet/>
  <Rodape/>
  </>
  )
}