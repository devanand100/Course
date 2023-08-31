import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  onClick?: () => void | ((arg0: string) => void);
  classes?: string;
};

function Button({ children, onClick, classes, ...props }: PropTypes) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`bg-orange-600 text-white px-4 h-10 rounded-md ${classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
