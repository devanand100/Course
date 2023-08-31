import { ReactNode } from "react";

// components

type MovieProp = {
  children: ReactNode;
};
export default function Main({ children }: MovieProp) {
  return <main className="main">{children}</main>;
}
