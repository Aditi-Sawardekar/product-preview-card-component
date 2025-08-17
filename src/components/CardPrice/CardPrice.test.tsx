import { render, screen } from "@testing-library/react";
import CardPrice from "./CardPrice";

describe("CardPrice", () => {
  it("Should render the discounted and original price with correct aria-labels", () => {
    render(<CardPrice />);

    const discountedPrice = screen.getByLabelText(/discounted price/i);
    expect(discountedPrice).toHaveTextContent(/\$\s?149\.99/);

    const originalPrice = screen.getByLabelText(/original price/i);
    expect(originalPrice).toHaveTextContent(/\$\s?169\.99/);
  });
});
