import { render, screen } from "@testing-library/react";
import { CatalogCard } from "./CatalogCard";
import { Product } from "../../pages/Catalog/columns";

describe("Catalog card", () => {
  test("в карточке должны быть данные, которые мы указали", () => {
    const testData: Omit<Product, "key"> = {
      category: "testCategory",
      description: "testDesc",
      id: 1,
      price: 100,
      title: "testTitle",
    };
    render(<CatalogCard {...testData} />);
    const elements: Record<string, unknown> = {
      category: screen.getByText(testData.category),
      description: screen.getByText(testData.description),
      id: screen.getByText(testData.id),
      price: screen.getByText(testData.price),
      title: screen.getByText(testData.title),
    };
    for (const key in elements) {
      expect(elements[key]).toBeInTheDocument();
    }
  });
});
