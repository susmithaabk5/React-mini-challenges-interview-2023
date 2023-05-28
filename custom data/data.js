import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    var filterres;
    debugger;
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      filterres = res.data.filter((product) => {
        return product.category === "electronics";
      });
      const data = filterres.sort((a, b) => a.product - b.product);
      setProductList(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {productList.map((detail, i) => {
        return (
          <>
            {" "}
            <p>Name:{detail.name}</p>
            <p>{detail.price}</p>
          </>
        );
      })}
    </div>
  );
}
