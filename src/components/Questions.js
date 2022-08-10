import PropTypes from 'prop-types';
import React from 'react';
import randomArray from '../tests/helpers/randomArray';

class Question extends React.Component {
  // handleAnswerSubmit = ({ target }) => {
  //   const gotItRight = target.key === 'correct_answer';

  // }

  render() {
    const { question } = this.props;
    console.log(question);
    const answers = question.incorrect_answers;
    answers.push(question.correct_answer);
    const shuffledAnswers = randomArray(answers);
    const shuffledFiltered = shuffledAnswers
      .filter((answer) => typeof answer !== 'undefined');
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
          {shuffledFiltered.map((answer) => {
            if (answer === question.correct_answer) {
              return (
                <button
                  data-testid="correct-answer"
                  type="button"
                  key="correct_answer"
                  onClick={ this.handleAnswerSubmit }
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
                onClick={ this.handleAnswerSubmit }
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
};

export default Question;
