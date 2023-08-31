import { ReactNode } from "react";

type propType = {
  onSelect: (arg0: number) => void;
  options: { value: number; text: string }[];
  children: ReactNode;
  selected: number;
};

function SelectBox({ onSelect, options, children, selected }: propType) {
  return (
    <div>
      {children}
      <select
        name=""
        id=""
        value={selected}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
