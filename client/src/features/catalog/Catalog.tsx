
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import type { Product } from "../../app/models/Product";

const Catalog=()=> {
 const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      fetch("https://localhost:5001/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

  return (
  
  <ProductsList products={products}/>
     
  )
}

export default Catalog
