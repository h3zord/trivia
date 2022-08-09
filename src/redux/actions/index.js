import getToken from '../../services/tokenAPI';

const requestToken = () => ({
  type: 'REQUEST_TOKEN',
});

const receiveTokenSuccess = (token) => ({
  type: 'RECEIVE_TOKEN_SUCCESS',
  token,
});

const receiveTokenFailure = (error) => ({
  type: 'RECEIVE_TOKEN_FAILURE',
  error,
});

const actionQuestions = (payload) => ({
  type: 'RECEIVE_QUESTIONS',
  payload,
});

function fetchToken() {
  return async (dispatch, getState) => {
    console.log('getState -->', getState);
    dispatch(requestToken());
    try {
      const response = await getToken();
      dispatch(receiveTokenSuccess(response));
    } catch (error) {
      dispatch(receiveTokenFailure(error));
    }
  };
}

const playerInfoToStore = (playerName, playerEmail) => ({
  type: 'PLAYER_INFO_TO_STORE',
  playerName,
  playerEmail,
});

export {
  fetchToken,
  receiveTokenSuccess,
  playerInfoToStore,
  actionQuestions,
};
