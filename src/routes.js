import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/paginas/Inicio";
import SobreMim from "./componentes/paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/sobremim" element={ <SobreMim /> } />
        <Route path="*" element={<h1> Página não foi encontrada! ;-; </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;