import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

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
        <p data-testid="feedback-total-score">{getScore}</p>
        <p data-testid="feedback-total-question">{totalPoints}</p>
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

Feedback.propTypes = {
  totalPoints: PropTypes.number.isRequired,
  getScore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
