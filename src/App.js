import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Productos from './screens/Productos';
import ProductoDetalle from './screens/ProductoDetalle';
import Footer from './components/Footer';
import FooterMarcas from "./components/FooterMarcas";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Productos' element={<Productos/>}></Route>
        <Route path='/:productoId' element={<ProductoDetalle/>}></Route>
      </Routes>
      <FooterMarcas/>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
