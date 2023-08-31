import { useState } from "react";
import Input from "./Input";
import { FriendType } from "./types";
import Button from "./Button";

type PropTypes = {
  selectedFriend: FriendType;
  setFriends: (val: FriendType) => void;
};

function SplitForm({ selectedFriend, setFriends }: PropTypes) {
  const [amount, setAmount] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [paidBy, setpaidBy] = useState("You");

  const NAME = selectedFriend?.name;
  let currentBalance = selectedFriend.balance;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-200 p-5 flex flex-col gap-10 items-end w-80 "
    >
      <p className="text-2xl font-bold">{`Split Bill with ${NAME}`}</p>
      <div>
        <label htmlFor="">Total Bill Amount :</label>
        <Input
          type="number"
          value={amount ? amount : ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="">Your Expense</label>
        <Input
          type="number"
          value={yourExpense ? yourExpense : ""}
          onChange={(e) => {
            if (Number(e.target.value) <= amount)
              setYourExpense(Number(e.target.value));
          }}
        />
      </div>

      <div>
        <label htmlFor="">{`${NAME}'s Expesne : `}</label>
        <Input
          value={amount ? amount - yourExpense : ""}
          type="number"
          disabled={true}
        />
      </div>
      <div>
        <label htmlFor="">Bill Paid By :</label>
        <select
          value={paidBy}
          onChange={(e) => setpaidBy(e.target.value)}
          className="p-2"
        >
          <option value={NAME}>{NAME}</option>
          <option value="You">You</option>
        </select>
      </div>

      <Button>Splt Expense</Button>
    </form>
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (amount < 1) {
      return;
    }

    if (paidBy === "You") {
      // console.log("BEFOR UPDATE", currentBalance, yourExpense, amount);
      currentBalance = currentBalance - (amount - yourExpense);
      // console.log("updated curr", currentBalance);
    } else {
      currentBalance = currentBalance + yourExpense;
    }
    // console.log(yourExpense, currentBalance);

    const updateObj = {
      id: selectedFriend.id,
      name: selectedFriend.name,
      image: selectedFriend.image,
      balance: currentBalance,
    };

    setFriends(updateObj);
    setAmount(0);
    setYourExpense(0);
  }
}

export default SplitForm;
