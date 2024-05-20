import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./Form";

describe("Form test", () => {
  test("после нажатия на кнопку submit, если поля пустые, появляется ошибка на странице", async () => {
    const { container } = render(<Form />);
    const formInputs = container.querySelectorAll("input");
    const button = screen.getByText("Сохранить");

    fireEvent.click(button);

    await waitFor(() => {
      const errors = screen.getAllByText("Поле обязательно для заполнения");
      errors.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
      expect(errors.length).toEqual(formInputs.length);
    });
  });

  test("после ввода данных в 1 инпут его значение должно поменяться", async () => {
    const { container } = render(<Form />);
    const testValue = "testValue";
    const firstInput = container.querySelector("input")!;
    fireEvent.change(firstInput, { target: { value: testValue } });
    expect(firstInput.value).toBe(testValue);
  });
});
