import { render, screen } from "@testing-library/react";
import CardTitle from "./CardTitle";

describe("CardTitle", () => {
  it("Should render the Card title", () => {
    render(<CardTitle title="Gabrielle Essence Eau De Parfum" />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Gabrielle Essence/i);
  });
});
