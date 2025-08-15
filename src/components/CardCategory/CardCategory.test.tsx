import { render, screen } from "@testing-library/react";
import CardCategory from "./CardCategory";

describe("CardCategory", () => {
  it("Should render Card category", () => {
    render(<CardCategory category="perfume" />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
  });
});
