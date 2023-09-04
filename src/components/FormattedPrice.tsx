interface Props {
  amount: Number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formattredAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formattredAmount}</span>;
};

export default FormattedPrice;
