interface PriceProps {
  currency: string;
  amount: number;
}

export default function Price({ currency, amount }: PriceProps) {
  return (
    // Using <data> element to semantically represent price with a machine-readable value.
    <data value={amount.toString()}>{`${currency} ${amount}`}</data>
  );
}
