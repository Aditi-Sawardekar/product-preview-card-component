import { render, screen } from "@testing-library/react";
import CardDescription from "./CardDescription";

describe("CardDescription", () => {
  it("Should render the Card Description with the important keywords", () => {
    const descriptionText =
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, perfumer-creator for the house of Chanel.";

    render(<CardDescription description={descriptionText} />);

    const keywords = screen.getByText(/floral.*Olivier Polge.*Chanel/i);
    expect(keywords).toBeInTheDocument();
  });
});
