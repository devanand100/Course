import { ReactElement } from "react";

export interface QuestionAndAnswer {
  question: string;
  answer: string | ReactElement;
}
