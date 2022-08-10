import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Question from '../components/Questions';
import Timer from '../components/Timer';
import { actionReciveButton, requestQuestions } from '../redux/actions';

class Game extends React.Component {
  constructor() {
    super();
    this.state = { indexQuestions: 0 };
  }

  componentDidMount = () => {
    const { fetchAPI } = this.props;
    fetchAPI(
      `https://opentdb.com/api.php?amount=5&token=${localStorage.getItem(
        'token',
      )}`,
    );
  };

  onClickChange = () => {
    const { history } = this.props;
    const { indexQuestions } = this.state;
    const numberIndex = 4;
    this.setState((prevState) => ({
      indexQuestions: prevState.indexQuestions + 1,
    }));
    if (indexQuestions === numberIndex) {
      history.push('/feedback');
    }
  };

  render() {
    const { indexQuestions } = this.state;
    const { questions, requestAPI, requestState, randomArray, showButton } = this.props;
    const requestFailed = 3;
    if (requestState === requestFailed) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header />
        <Timer />
        {!requestAPI && (
          <Question
            question={ questions[indexQuestions] }
            randomArray={ randomArray[indexQuestions] }
          />
        )}
        { showButton ? (
          <button
            id="buttonNext"
            type="button"
            data-testid="btn-next"
            onClick={ this.onClickChange }
          >
            Next
          </button>
        ) : ('')}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (endPoint) => dispatch(requestQuestions(endPoint)),
  reciveButton: (payload) => dispatch(actionReciveButton(payload)),
});

const mapStateToProps = (store) => ({
  questions: store.game.questions,
  requestAPI: store.game.requestAPI,
  requestState: store.game.requestState,
  randomArray: store.game.randomArray,
  showButton: store.game.showButton,
});

Game.propTypes = {
  requestState: PropTypes.number,
  questions: PropTypes.arrayOf(PropTypes.object),
  fetchAPI: PropTypes.func.isRequired,
  requestAPI: PropTypes.bool,
  randomArray: PropTypes.arrayOf(PropTypes.any),
  showButton: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,
};

Game.defaultProps = {
  questions: [],
  requestAPI: true,
  requestState: 0,
  randomArray: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
