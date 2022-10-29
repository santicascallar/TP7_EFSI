import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Productos from './views/Productos';
import ProductoDetalle from './views/ProductoDetalle';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/:productoId" element={<ProductoDetalle />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;