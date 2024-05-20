import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
describe("profile", () => {
  it("Наличие полей с именем и фамилией", () => {
    render(<Profile />);
    const name = screen.getByText("Кретинина Татьяна Сергеевна");
    const group = screen.getByText("221-322");
    expect(name).toBeInTheDocument();
    expect(group).toBeInTheDocument();
  });
});
