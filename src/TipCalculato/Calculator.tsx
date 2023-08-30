import { useState } from "react";
import Input from "./Input";
import SelectBox from "./selectBox";
import Message from "./message";

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = Math.round((amount * ((percentage1 + percentage2) / 2)) / 100);
  console.log(amount, percentage1, percentage2);
  return (
    <>
      <Input amount={amount} amountChange={(val) => setAmount(val)} />
      <SelectBox
        onSelect={(val) => setPercentage1(val)}
        selected={percentage1}
        options={[
          { value: 0, text: "DisSatisfied" },
          { value: 5, text: "it was okay" },
          { value: 10, text: "it was good" },
          { value: 20, text: "Absolute Amazing" },
        ]}
      >
        How Did you Like The Service
      </SelectBox>
      <SelectBox
        onSelect={(val) => setPercentage2(val)}
        selected={percentage2}
        options={[
          { value: 0, text: "DisSatisfied" },
          { value: 5, text: "it was okay" },
          { value: 10, text: "it was good" },
          { value: 20, text: "Absolute Amazing" },
        ]}
      >
        How Did you Like The Service
      </SelectBox>
      <Message total={amount} tip={tip} />
      <button
        onClick={() => {
          setAmount(0);
          setPercentage1(0);
          setPercentage2(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Calculator;
