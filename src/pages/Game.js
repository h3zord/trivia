import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import getQuestions from '../services/questionsAPI';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      questionsList: [],
    };
  }

  componentDidMount = () => {
    this.getQuestionsFromAPI();
  }

  getQuestionsFromAPI = async () => {
    const THREE = 3;
    const { history } = this.props;
    const questionsAPIReturn = await getQuestions();
    if (questionsAPIReturn.response_code === THREE
      && questionsAPIReturn.results.length === 0) {
      localStorage.removeItem('token');
      history.push('/');
    }
    this.setState({
      questionsList: questionsAPIReturn.results,
    }, () => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { questionsList, loading } = this.state;
    return (
      <>
        <Header />
        {/* <Question question={ objectExemple } /> */}
        {loading ? <h1>Carregando</h1> : <Question question={ questionsList[1] } />}
      </>
    );
  }
}

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Game;
