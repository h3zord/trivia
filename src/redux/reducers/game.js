import { REQUEST_API, REQUEST_SUCSSES } from '../actions';

const INITIAL_STATE = {
  score: 0,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, requestAPI: true };
  case REQUEST_SUCSSES:
    return { ...state,
      questions: action.questions,
      score: 0,
      randomArray: action.randomArray,
      requestAPI: false,
      requestState: action.requestState,
    };
  default:
    return state;
  }
};

export default game;
