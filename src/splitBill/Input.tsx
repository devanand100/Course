import { HTMLInputTypeAttribute } from "react";

type PropTypes = {
  type?: HTMLInputTypeAttribute;
  onChange?: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  disabled?: boolean;
};

function Input({ type = "text", value, onChange, ...props }: PropTypes) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...props}
      className="focus:ring-2 p-2 border-2 border-orange-300 border-solid focus:ring-orange-500 focus:outline-none rounded-sm"
    />
  );
}

export default Input;
