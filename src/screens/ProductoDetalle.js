import Navbar from "../components/Navbar";
import FooterMarcas from "../components/FooterMarcas";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { getProductos } from "../services/sanitarioService";

const ProductoDetalle = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() =>{
      
      const obtenerProducto = async () => {

        const url = `https://dummyjson.com/products/${productoId}`;
        const result = await axios.get(url);
        console.log(result.data);
        console.log(result)
        setProducto(result.data);
      }

      obtenerProducto()
      
    },[productoId]);

    console.log(producto);

    return (
      <div>
        <Navbar/>
        <div>
            {producto.map((product) => {
                return(
                    <li key={product.id}>
                        <h1> Titulo {product.title}</h1>
                        <h2> Descripción {product.description}</h2>
                    </li>
                );                  
            })}
        </div>

        <FooterMarcas/>
        <Footer/>
      </div>
    );
}
  
export default ProductoDetalle;