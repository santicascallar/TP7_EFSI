import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getProductos } from "../services/sanitarioService";

const Home = () => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
      getProductos().then(data => {setProductos(data)
        console.log(data)
    })
    },[]);

    return (
      <div>
          <Navbar/>
          <div className="container">
            <p>
              Tp7 - EFSI
            </p>

            
          </div>
          <Footer/>
      </div>
    );
}
  
  export default Home;
  