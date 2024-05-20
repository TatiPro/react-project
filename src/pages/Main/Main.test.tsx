import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Main test", () => {
  test("должна быть надпись главной страницы", () => {
    render(<Main />);
    const title = screen.getByText("Это главная страница");
    expect(title).toBeInTheDocument();
  });
});
