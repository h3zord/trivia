import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';

class Game extends React.Component {
  render() {
    const { receiveQuestions } = this.props;
    return (
      <>
        <Header />
        {/* <Question question={ objectExemple } /> */}
        <Question question={ receiveQuestions } />
      </>
    );
  }
}

Game.propTypes = {
  receiveQuestions: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (store) => ({
  receiveQuestions: store.game.questions,
});

export default connect(mapStateToProps)(Game);
