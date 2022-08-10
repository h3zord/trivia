import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Question from '../components/Questions';
import { requestQuestions } from '../redux/actions';

class Game extends React.Component {
  componentDidMount = () => {
    const { fetchAPI } = this.props;
    fetchAPI(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`);
  }

  render() {
    const { questions, requestAPI, requestState } = this.props;
    console.log(requestAPI);
    console.log(questions);
    const requestFailed = 3;
    if (requestState === requestFailed) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header />
        {!requestAPI && <Question question={ questions[0] } />}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (endPoint) => dispatch(requestQuestions(endPoint)),
});

const mapStateToProps = (store) => ({
  questions: store.game.questions,
  requestAPI: store.game.requestAPI,
  requestState: store.game.requestState,
});

Game.propTypes = {
  requestState: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
  fetchAPI: PropTypes.func.isRequired,
  requestAPI: PropTypes.bool,
};

Game.defaultProps = {
  questions: [],
  requestAPI: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
