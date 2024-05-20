import { useCallback, useEffect, useState } from "react";
import { Product } from "../pages/Catalog/columns";
import { getProducts } from "../utils/getProducts";

export enum Status {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INIT = "INIT",
}

export const useFetchProducts = (limit: number) => {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>(Status.INIT);
  const skip = (page - 1) * limit;
  const fetchProducts = useCallback(async () => {
    setStatus(Status.LOADING);
    try {
      const products = await getProducts(limit, skip);
      setProducts((prev) => [...prev, ...products.products]);
      setStatus(Status.SUCCESS);
    } catch (e) {
      console.log("fetch products error");
      setStatus(Status.ERROR);
    }
  }, [limit, skip]);
  useEffect(() => {
    fetchProducts();
  }, [page, fetchProducts]);

  return { products, status, page, setPage };
};
