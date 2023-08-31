import { ReactNode, useState } from "react";

type BoxPropTypes = {
  children: ReactNode;
};

function Box({ children }: BoxPropTypes) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

export default Box;
