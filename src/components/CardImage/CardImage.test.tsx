import { render, screen } from "@testing-library/react";
import CardImage from "./CardImage";

describe("CardImage", () => {
  it("Should render the Card image with the correct alt text", () => {
    render(
      <CardImage
        src="src/assets/images/image-product-mobile.jpg"
        alt="Image of Gabrielle Essence Eau De Parfum"
      />
    );

    const image = screen.getByRole("img", {
      name: /Gabrielle Essence Eau de Parfum/i,
    });
    expect(image).toBeInTheDocument();
  });
});
