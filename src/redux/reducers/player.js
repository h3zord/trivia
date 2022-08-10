const INITIAL_STATE = {
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUM_SCORE':
    return {
      ...state, score: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default player;
