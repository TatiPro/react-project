import "./Catalog.css";
import { Status, useFetchProducts } from "../../hooks/useFetchProducts";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CatalogCard } from "../../components/CatalogCard/CatalogCard";
const LIMIT_LIST_PRODUCTS = 20; /* количество продуктов с одноого запроса на странице */
const TOTAL_PRODUCTS = 100; /* максимальное колво продуктов */
/* модуль 2, в хуке useFetchProducts обновляется запрос при каждом обновлении страницы и в стейт добавляются новые данные */
const Catalog = () => {
  const { products, page, setPage, status } = useFetchProducts(LIMIT_LIST_PRODUCTS);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (page * LIMIT_LIST_PRODUCTS < TOTAL_PRODUCTS) inView && setPage((prev) => prev + 1);
  }, [inView, setPage]);
  return (
    <>
      <h1>Каталог</h1>
      <p>Элементов на странице: {page * LIMIT_LIST_PRODUCTS}</p>
      <div className="cards">
        {products?.map((item) => (
          <CatalogCard
            id={item.id}
            category={item.category}
            description={item.description}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
      {status === Status.LOADING && <h3>Загрузка данных...</h3>}
      {status === Status.ERROR && <p>Не удалось загрузить данные...</p>}
      {status !== Status.LOADING && <div style={{ height: "50px;" }} ref={ref}></div>}
    </>
  );
};

export default Catalog;
