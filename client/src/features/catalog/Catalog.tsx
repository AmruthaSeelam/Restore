
import type { CatalogProps } from "./Catalog";
import ProductsList from "./ProductsList";

const Catalog=({products}:CatalogProps)=> {
  return (
  
  <ProductsList products={products}/>
     
  )
}

export default Catalog
