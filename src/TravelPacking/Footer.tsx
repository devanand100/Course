import { itemType } from "./types/type";

export function Footer({ items }: { items: itemType[] }) {
  const total = items.length;
  const packed = items.filter((item) => item.isPacked).length;
  const perc = Math.round((packed / total) * 100);

  return (
    <div className="w-full bg-red-500 text-white p-5">
      {perc < 100 ? (
        <p className="text-white ">
          you have total <span className=" font-bold  text-xl">{total} </span>{" "}
          items and you already packed
          <span className="font-bold  text-xl ">
            {` ${packed} (${perc})%`}{" "}
          </span>
        </p>
      ) : (
        <p>you are ready to go</p>
      )}
    </div>
  );
}
