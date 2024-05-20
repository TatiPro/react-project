import axios from "axios";
import { Product } from "../pages/Catalog/columns";

interface IResponseProducts {
  products: Array<Product>;
}
export const getProducts = async (limit: number, skip: number): Promise<IResponseProducts> => {
  const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return data;
};
