import { AccordianItem } from "./AccordianItem";
import { QuestionAndAnswer } from "./types";
import { useState } from "react";

export function Carausal() {
  const def: QuestionAndAnswer[] = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX (JavaScript XML) is an extension for writing React components.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the actual DOM used for performance optimization in React.",
    },
    {
      question: "What are React components?",
      answer:
        "React components are the building blocks of a user interface in React applications.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is a mechanism to store and manage dynamic data in React components.",
    },
  ];

  const [curIndex, setCurIndex] = useState(-1);

  return (
    <div className="flex flex-col gap-6 m-4">
      {def.map((qa, index) => (
        <AccordianItem
          questionAndAnswer={qa}
          open={curIndex === index}
          index={index}
          onClick={handleToggle}
        />
      ))}
    </div>
  );

  function handleToggle(id: number) {
    if (curIndex === id) {
      setCurIndex(-1);
    } else {
      setCurIndex(id);
    }
  }
}
