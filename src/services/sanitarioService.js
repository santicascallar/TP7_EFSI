import axios from "axios";

export const getProductos = async () => {
    return axios.get(`https://dummyjson.com/products`)
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch(error => {
          console.log(error)
          throw error; 
        });
}