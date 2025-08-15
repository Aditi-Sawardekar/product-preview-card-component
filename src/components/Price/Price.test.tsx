import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price component", () => {
  it("Should render the currency and amount", () => {
    render(<Price currency="$" amount={29.99} />);

    const currencyValue = screen.getByText(/^[€£$₹]\s\d+\.\d{2}$/);
    expect(currencyValue).toBeInTheDocument();
  });
});

/* Regex explanation:
 ^         — Start of string
 [₹$€£]    — One of the accepted currency symbols (₹, $, €, £)
 \s?       — Optional space between currency and amount
 \d+       — One or more digits (the integer part)
 \.        — A literal decimal point
 \d{2}     — Exactly two digits after the decimal (cents)
 $         — End of string
*/
