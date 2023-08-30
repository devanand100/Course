import { useState } from "react";
import { itemType } from "./types/type";

export function Form({ addItems }: { addItems: (item: itemType) => void }) {
  const [quantity, seQuantity] = useState(1);
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full bg-purple-400 p-5"
    >
      <h3>What do you need for your 😍 trip?</h3>
      <div>
        <select
          className="p-4  bg-white border-white "
          value={quantity}
          onChange={(e) => seQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
        </select>

        <input
          className="py-3 border-2"
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-white border-2  border-solid  border-yellow-400 rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  );

  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    if (name.length <= 0) {
      return;
    }

    const newItem: itemType = {
      id: Number(new Date()),
      name: name,
      quantity: quantity,
      isPacked: false,
    };

    addItems(newItem);
    setName("");
    seQuantity(1);
  }
}
