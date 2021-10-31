const AnswerReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ANSWER":
      localStorage.setItem("DATA_ANSWER", JSON.stringify(state.answers));
      return state;
    default:
      break;
  }
};

export default AnswerReducer;
