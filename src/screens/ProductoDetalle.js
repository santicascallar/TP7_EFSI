import FooterMarcas from "../components/FooterMarcas";
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
        setProducto(result.data);
      }

      obtenerProducto()
      
    },[productoId]);

    console.log(producto);

    return (
      <div>
        <div>
            {producto.map((product, i) => {
                return(
                    <li key={i}>
                        <h1> Titulo {product.title}</h1>
                        <h2> Descripción {product.description}</h2>
                    </li>
                );                  
            })}
        </div>

        <FooterMarcas/>
      </div>
    );
}
  
export default ProductoDetalle;