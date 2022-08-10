import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import randomArray from '../tests/helpers/randomArray';

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

  handleClick = ({ target }) => {
    const { question: { correct_answer: correct } } = this.props;
    if (target.innerText === correct) {
      target.classList.add('question-correct');
    } else {
      target.classList.add('question-incorrect');
    }
    const buttons = document.querySelectorAll('.button');
    this.alternate(buttons);
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
};

const mapStateToProps = (store) => ({
  timeOver: store.game.timeOver,
});

export default connect(mapStateToProps)(Question);
