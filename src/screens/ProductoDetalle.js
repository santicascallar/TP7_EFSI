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
        console.log(result)
        setProducto(result.data);
      }

      obtenerProducto()
      
    },[productoId]);

    console.log(producto);

    return (
      <div>
        <div className="container py-4">
            <h1> Titulo {producto.title}</h1>
            <h2> Descripción {producto.description}</h2>
            <img className="card-img-top" src={producto.thumbnail} width={500} height={600} alt="producto"/>
        </div>
        <FooterMarcas/>
      </div>
    );
}
  
export default ProductoDetalle;