import { QuestionType } from "../config/QuestionConfig";

const DATA_QUESTION = {
  questions: [
    { id: 1, q: { question: "What is this?" }, type: QuestionType.Rating },
    {
      id: 2,
      q: {
        question: "What is this?",
        choices: ["Green", "Red", "Blue", "White"],
      },
      type: QuestionType.Test,
    },
    { id: 3, q: { question: "What is this?" }, type: QuestionType.Descriptive },
  ],
  duration: 120,
};

const DATA_ANSWER = {
  index: 0,
  duration: 120,
  finish: false,
  answers: [
    { id: 1, a: { answer: null }, type: QuestionType.Rating },
    {
      id: 2,
      a: {
        answer: null,
      },
      type: QuestionType.Test,
    },
    { id: 3, a: { answer: "" }, type: QuestionType.Descriptive },
  ],
};
export { DATA_QUESTION, DATA_ANSWER };
