import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resetAssertionsAction, resetScoreAction, showTimer } from '../redux/actions';

class Feedback extends React.Component {
  playAgainClick = () => {
    const { history, resetScore, resetAssertions, showTimerAction } = this.props;
    const MAGICNUMBER = 30;
    showTimerAction(MAGICNUMBER);
    resetScore();
    resetAssertions();
    history.push('/');
  }

  rankingButtonClick = () => {
    const { history, resetScore, resetAssertions, showTimerAction } = this.props;
    const MAGICNUMBER = 30;
    showTimerAction(MAGICNUMBER);
    resetScore();
    resetAssertions();
    history.push('/ranking');
  }

  render() {
    const { totalPoints, getScore } = this.props;
    const MIN_POINTS = 3;
    return (
      <div>
        <Header />
        <p className="score">
          Score:
          {' '}
          <span data-testid="feedback-total-score">
            {getScore}
          </span>
        </p>
        { totalPoints < MIN_POINTS
          ? (
            <p data-testid="feedback-text">Could be better...</p>)
          : <p data-testid="feedback-text">Well Done!</p>}
        <p>
          Hits:
          {' '}
          <span data-testid="feedback-total-question">
            {totalPoints}
          </span>
        </p>
        <button
          type="button"
          onClick={ this.playAgainClick }
          data-testid="btn-play-again"
        >
          Play Again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.rankingButtonClick }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  getScore: store.player.score,
  totalPoints: store.player.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  resetScore: (score) => dispatch(resetScoreAction(score)),
  resetAssertions: (assertions) => dispatch(resetAssertionsAction(assertions)),
  showTimerAction: (payload) => dispatch(showTimer(payload)),
});

Feedback.propTypes = {
  totalPoints: PropTypes.number.isRequired,
  getScore: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  resetScore: PropTypes.func.isRequired,
  resetAssertions: PropTypes.func.isRequired,
  showTimerAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
