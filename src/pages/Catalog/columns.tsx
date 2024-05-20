import type { ColumnsType } from "antd/es/table";

export interface Product {
  key: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

export const columns: ColumnsType<Product> = [
  {
    key: "title",
    title: "Название",
    dataIndex: "title",
  },
  {
    key: "description",
    title: "Описание",
    dataIndex: "description",
  },
  {
    key: "category",
    title: "Категория",
    dataIndex: "category",
  },
  {
    key: "price",
    title: "Цена",
    dataIndex: "price",
  },
];
