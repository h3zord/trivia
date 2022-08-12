import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resetAssertionsAction, resetScoreAction } from '../redux/actions';

// menssageScore = () => {
//   const { getScore } = this.props;
//   const number = 3;
//   if (getScore < number) {
//     return 'Could be better...';
//   }
//   if (getScore >= number) {
//     return 'Well Done!';
//   }
// };

// handleClick = () => {
//   const { history } = this.props;
//   history.push('/Ranking');
// };

class Feedback extends React.Component {
  playAgainClick = () => {
    const { history, resetScore, resetAssertions } = this.props;
    resetScore();
    resetAssertions();
    history.push('/');
  }

  RankingButtonClick = () => {
    const { history, resetScore, resetAssertions } = this.props;
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
        { totalPoints < MIN_POINTS
          ? (
            <p data-testid="feedback-text">Could be better...</p>)
          : <p data-testid="feedback-text">Well Done!</p>}
        <p>
          Score:
          {' '}
          <spam data-testid="feedback-total-score">
            {getScore}
          </spam>
        </p>
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
          onClick={ this.RankingButtonClick }
        >
          Ranking
        </button>
        {/* {this.menssageScore} */}
        {/* <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleClick }
        >
          Ranking
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  getScore: store.player.score,
  totalPoints: store.player.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  resetScore: (score) => { dispatch(resetScoreAction(score)); },
  resetAssertions: (assertions) => { dispatch(resetAssertionsAction(assertions)); },
});

Feedback.propTypes = {
  totalPoints: PropTypes.number.isRequired,
  getScore: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  resetScore: PropTypes.func.isRequired,
  resetAssertions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
