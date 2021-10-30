import { QuestionType } from "../config/QuestionConfig";

const DATA_QUESTION = [
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
];

const DATA_ANSWER = [
  { id: 1, a: { answer: null }, type: QuestionType.Rating },
  {
    id: 2,
    a: {
      answer: null,
    },
    type: QuestionType.Test,
  },
  { id: 3, a: { answer: "" }, type: QuestionType.Descriptive },
];
export { DATA_QUESTION, DATA_ANSWER };
