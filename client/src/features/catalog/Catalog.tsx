import ProductsList from "./ProductsList";
import { useFetchProductsQuery } from "../../store/catalogApi";

const Catalog = () => {
  const { data } = useFetchProductsQuery();
  if (!data) return <div>Loading...</div>;
  return <ProductsList products={data} />;
};

export default Catalog;
