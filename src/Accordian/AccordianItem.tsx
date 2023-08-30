import { QuestionAndAnswer } from "./types";

type PropType = {
  open: boolean;
  questionAndAnswer: QuestionAndAnswer;
  index: number;
  onClick: (id: number) => void;
};

export function AccordianItem({
  open,
  questionAndAnswer,
  index,
  onClick,
}: PropType) {
  return (
    <div
      className={`grid grid-cols-[40px,1fr] shadow-md p-4 transition-all duration-300 ${
        open ? "border-t-4  border-green-400" : ""
      } `}
      onClick={() => onClick(index)}
    >
      <div
        className={`text-center text-xl ${
          open ? "text-green-400" : "text-slate-300"
        } `}
      >
        {index + 1}.
      </div>
      <div>
        <div className="flex justify-between text-xl items-center">
          <span className={`${open ? "text-green-400" : ""}`}>
            {questionAndAnswer.question}
          </span>
          <span className="me-5  px-3 border-2 border-green-400">
            {open ? "-" : "+"}
          </span>
        </div>
        {open && <div className="pt-3">{questionAndAnswer.answer}</div>}
      </div>
    </div>
  );
}
