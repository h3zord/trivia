import React from 'react';
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
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">
          Ola,hehe
          {/* {this.menssageScore} */}
        </p>
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
  getScore: store.game.score,
});

export default connect(mapStateToProps, null)(Feedback);
