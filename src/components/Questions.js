import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionReciveButton, sumScore, sumTotalPoints } from '../redux/actions';

class Question extends React.Component {
  alternate = (element) => {
    const { question: { correct_answer: correct } } = this.props;
    for (let index = 0; index < element.length; index += 1) {
      if (element[index].innerText === correct) {
        element[index].classList.add('question-correct');
      } else {
        element[index].classList.add('question-incorrect');
      }
    }
  }

  validationAnswer = (target) => {
    const { question, timer, sumScoreAction, score, sumPoints } = this.props;
    const MAGICNUMBER = 10;
    const HARD = 3;
    let subTotalScore = 0;
    let totalScore = 0;
    let assertions = 0;
    if (target.id === 'correct-answer') {
      if (question.difficulty === 'easy') {
        assertions += 1;
        subTotalScore = MAGICNUMBER + (timer * 1);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        sumPoints(assertions);
      }
      if (question.difficulty === 'medium') {
        assertions += 1;
        subTotalScore = MAGICNUMBER + (timer * 2);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        sumPoints(assertions);
      }
      if (question.difficulty === 'hard') {
        assertions += 1;
        subTotalScore = MAGICNUMBER + (timer * HARD);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        sumPoints(assertions);
      }
    }
  }

  handleClick = ({ target }) => {
    const { reciveButton } = this.props;
    // if (target.innerText === correct) {
    //   target.classList.add('question-correct');
    // } else {
    //   target.classList.add('question-incorrect');
    // }
    const buttons = document.querySelectorAll('.button');
    this.alternate(buttons);
    reciveButton(true);
    this.validationAnswer(target);
  }

  render() {
    const { question, randomArray, timeOver } = this.props;
    let wrongAnswerIndex = 0;
    return (
      <>
        <div data-testid="question-category">
          { question.category }
        </div>
        <div data-testid="question-text">
          { question.question }
        </div>
        <div data-testid="answer-options">
          {randomArray.map((answer) => {
            if (answer === question.correct_answer) {
              return (
                <button
                  data-testid="correct-answer"
                  id="correct-answer"
                  type="button"
                  key="correct_answer"
                  className="button"
                  onClick={ this.handleClick }
                  disabled={ timeOver }
                >
                  {answer}
                </button>);
            }
            wrongAnswerIndex += 1;
            return (
              <button
                data-testid={ `wrong-answer-${wrongAnswerIndex - 1}` }
                type="button"
                key={ wrongAnswerIndex }
                className="button"
                onClick={ this.handleClick }
                disabled={ timeOver }
              >
                {answer}
              </button>);
          })}
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  randomArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  timeOver: PropTypes.bool.isRequired,
  score: PropTypes.number,
  timer: PropTypes.number.isRequired,
  sumScoreAction: PropTypes.func.isRequired,
  reciveButton: PropTypes.func.isRequired,
  sumPoints: PropTypes.func.isRequired,
};

Question.defaultProps = {
  score: 0,
};

const mapStateToProps = (store) => ({
  timeOver: store.game.timeOver,
  showButton: store.game.showButton,
  score: store.player.score,
  timer: store.game.timer,
  // score: store.game.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  reciveButton: (payload) => dispatch(actionReciveButton(payload)),
  sumScoreAction: (payload) => dispatch(sumScore(payload)),
  sumPoints: () => dispatch(sumTotalPoints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
