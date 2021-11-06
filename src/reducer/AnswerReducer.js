import { DATA_ANSWER } from "../data/data";

const ANSWER_ACTION_TYPE = { UPDATE_ANSWER: 1, RESET_ANSWER: 2 };
const AnswerReducer = (state, action) => {
  switch (action.type) {
    case ANSWER_ACTION_TYPE.UPDATE_ANSWER:
      localStorage.setItem("DATA_ANSWER", JSON.stringify(state.answers));
      return state;
    case ANSWER_ACTION_TYPE.RESET_ANSWER:
      localStorage.setItem("DATA_ANSWER", JSON.stringify(DATA_ANSWER));
      return state;
    default:
      break;
  }
};

export { ANSWER_ACTION_TYPE };
export default AnswerReducer;
