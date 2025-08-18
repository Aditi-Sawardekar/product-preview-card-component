import { render, screen } from "@testing-library/react";
import CardButton from "./CardButton";

describe("CardButton", () => {
  it("Should render Add to Cart Button", () => {
    render(<CardButton label="Add to Cart" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/add|cart/i);
  });
});
