import { useState } from "react";
import { itemType } from "./types/type";

interface itemsProps {
  items: itemType[];
  update: (id: number) => void;
  deleteItem: (id: number) => void;
}

interface ItemProp {
  item: itemType;
  update: (id: number) => void;
  deleteItem: (id: number) => void;
}

export function Items({ items, update, deleteItem }: itemsProps) {
  const [filter, setFilter] = useState("input");
  let filteredItems;

  if (filter === "input") {
    filteredItems = items;
  }

  if (filter === "packed") {
    filteredItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }
  return (
    <div>
      <ul className="flex items-start flex-wrap gap-4">
        {filteredItems?.map((item) => (
          <Item
            item={item}
            key={item.id}
            update={update}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="input">default</option>
        <option value="packed">by packed</option>
      </select>
    </div>
  );
}

function Item({ item, update, deleteItem }: ItemProp) {
  return (
    <li className="flex p-4 text-lg items-center hover:shadow-lg border-2 border-slate-100 rounded-sm ">
      <input
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 mx-2"
        type="checkbox"
        name=""
        id=""
        checked={item.isPacked}
        onChange={() => update(item.id)}
      />
      <p style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => deleteItem(item.id)}
        className="text-base mx-2"
      >
        ❌
      </button>
    </li>
  );
}
