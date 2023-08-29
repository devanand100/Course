import { useState } from "react";
import { Form } from "./Form";
import { Footer } from "./Footer";
import { Items } from "./Items";
import { Header } from "./Header";
import { itemType } from "./types/type";

export default function Main() {
  const initialItems: itemType[] = [
    { id: 1, name: "socks", quantity: 10, isPacked: false },
    { id: 2, name: "cap", quantity: 1, isPacked: true },
    { id: 3, name: "towel", quantity: 3, isPacked: false },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <div className="h-screen grid grid-rows-[auto,auto,1fr,auto]">
      <Header />

      <Form addItems={addItems} />
      <Items items={items} update={update} deleteItem={deleteItem} />

      <Footer items={items} />
    </div>
  );

  function addItems(item: itemType) {
    setItems([...items, item]);
  }

  function update(id: number) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isPacked: !item.isPacked };
        }
        return item;
      })
    );
  }

  function deleteItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }
}
