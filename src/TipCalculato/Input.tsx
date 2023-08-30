type propType = {
  amountChange: (value: number) => void;
  amount: number;
};

function Input({ amountChange, amount }: propType) {
  return (
    <>
      <p>Enter BillAmount</p>
      <input
        value={amount ? amount : ""}
        type="number"
        onChange={(e) => amountChange(Number(e.target.value))}
      />
    </>
  );
}

export default Input;
