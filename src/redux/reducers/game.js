const INITIAL_STATE = {
  score: 0,
  questions: [],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVE_QUESTIONS':
    return {
      ...state,
      questions: action.payload,
    };
  default:
    return state;
  }
};

export default game;
