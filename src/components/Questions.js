import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sumScore } from '../redux/actions';

class Question extends React.Component {
  // handleAnswerSubmit = ({ target }) => {
  //   const gotItRight = target.key === 'correct_answer';

  // }

  alternate = (element) => {
    const { question: { correct_answer: correct } } = this.props;
    for (let index = 0; index < element.length; index += 1) {
      if (element[index].classList.length !== 0) {
        if (element[index].innerText === correct) {
          element[index].classList.add('question-correct');
        } else {
          element[index].classList.add('question-incorrect');
        }
      }
    }
  }

  validationAnswer = (target) => {
    const { question, timer, sumScoreAction, score } = this.props;
    const MAGICNUMBER = 10;
    const HARD = 3;
    let subTotalScore = 0;
    let totalScore = 0;
    if (target.id === 'correct-answer') {
      if (question.difficulty === 'easy') {
        subTotalScore = MAGICNUMBER + (timer * 1);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        console.log(subTotalScore);
        console.log(totalScore);
      }
      if (question.difficulty === 'medium') {
        subTotalScore = MAGICNUMBER + (timer * 2);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        console.log(subTotalScore);
        console.log(totalScore);
      }
      if (question.difficulty === 'hard') {
        subTotalScore = MAGICNUMBER + (timer * HARD);
        totalScore = subTotalScore + score;
        sumScoreAction(totalScore);
        console.log(subTotalScore);
        console.log(totalScore);
      }
    }
  }

  handleClick = ({ target }) => {
    const { question: { correct_answer: correct } } = this.props;
    if (target.innerText === correct) {
      target.classList.add('question-correct');
    } else {
      target.classList.add('question-incorrect');
    }
    const buttons = document.querySelectorAll('.button');
    this.alternate(buttons);
    this.validationAnswer(target);
  }

  render() {
    const { question, randomArray, timeOver } = this.props;
    // console.log(question);
    // console.log(question.incorrect_answers);
    // console.log(question.correct_answer);
    // const answers = question.incorrect_answers;
    // answers.push(question.correct_answer);
    // const shuffledAnswers = randomArray(answers);
    // const shuffledFiltered = shuffledAnswers
    //   .filter((answer) => typeof answer !== 'undefined');
    // console.log(shuffledFiltered);
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
};

Question.defaultProps = {
  score: 0,
};

const mapDispatchToProps = (dispatch) => ({
  sumScoreAction: (payload) => dispatch(sumScore(payload)),
});

const mapStateToProps = (store) => ({
  timeOver: store.game.timeOver,
  timer: store.game.timer,
  score: store.player.score,
  // score: store.game.player.score,
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
