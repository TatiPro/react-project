import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./Catalog.css";
import axios from "axios";
import styled from "styled-components";
import { columns, Product } from "./columns";

// andt + Пагинация + styled-components (1+2+4)

const StyledButton = styled(Button)`
  background-color: var(--theme-color);
  color: var(--theme);
  border-radius: 1em;
  font-size: 1rem;
  margin-right: 1em;
  margin-top: 1em;
  line-height: 1.5;

  &:disabled {
    border-color: var(--theme-text);
    color: gray;
    background-color: white;
  }

  &:hover {
    color: gray !important;
    border-color: white !important  ;
  }
  &:active {
    color: black;
    border: 1px solid black !important;
  }
`;

const LIMIT_LIST_PRODUCTS = 10; 

const Catalog = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<Product[]>([]);
  const skip = (page - 1) * LIMIT_LIST_PRODUCTS;

  const getUsers = async (skip: number, limit: number) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    setDataSource(response.data.products);
  };

  useEffect(() => {
    getUsers(skip, LIMIT_LIST_PRODUCTS);
  }, [page]);

  return (
    <>
      <h1>Каталог</h1>
      <Table<Product>
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <StyledButton onClick={() => setPage(page - 1)} disabled={!skip}>
        Назад
      </StyledButton>
      <StyledButton onClick={() => setPage(page + 1)}>Вперед</StyledButton>
      <p>Текущая страница: {page}</p>
    </>
  );
};

export default Catalog;
