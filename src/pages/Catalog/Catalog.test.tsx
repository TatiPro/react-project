import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "./Catalog";

describe("Catalog test", () => {
  test("изначально должна быть надпись загрузки", () => {
    render(<Catalog />);
    const loadingText = screen.getByText("Загрузка данных...");
    expect(loadingText).toBeInTheDocument();
  });
  test("после загрузки появляются карточки, статус загрузки пропадает", async () => {
    render(<Catalog />);
    await waitFor(() => {
      screen.getAllByTestId("card");
    });
    const loadingText = screen.queryByText("Загрузка данных...");
    expect(loadingText).not.toBeInTheDocument();
  });
});
