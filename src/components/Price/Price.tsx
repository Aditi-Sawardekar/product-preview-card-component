interface PriceProps extends React.HTMLAttributes<HTMLElement> {
  currency: string;
  amount: number;
}

export default function Price({ currency, amount, ...rest }: PriceProps) {
  return (
    // Using <data> element to semantically represent price with a machine-readable value.
    <data value={amount.toString()} {...rest}>{`${currency}${amount}`}</data>
  );
}
