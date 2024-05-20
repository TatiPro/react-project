import { FC } from "react";
import { Product } from "../../pages/Catalog/columns";
import "./CatalogCard.css";
import { useInView } from "react-intersection-observer";
export const CatalogCard: FC<Omit<Product, "key">> = ({ category, description, price, title, id }) => {
  const { ref, inView } = useInView();
  return (
    <div className={`catalog-card__wrapper ${inView ? "card-show" : ""}`} ref={ref}>
      <h3>{id}</h3>
      <div data-testid="card" className="catalog-card__container">
        <div className="catalog-card__content">
          <h2 className={`${inView ? "card-title" : ""}`}>{title}</h2>
          <h3>
            <span style={{ fontWeight: "500" }}>Описание: </span> {description}
          </h3>
        </div>
        <div className="catalog-card__info">
          <p>
            Категория: <b>{category}</b>
          </p>
          <p>
            Цена: <b>{price}</b> USD
          </p>
        </div>
      </div>
    </div>
  );
};
