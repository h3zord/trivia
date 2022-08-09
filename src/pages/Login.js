import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionQuestions, fetchToken, playerInfoToStore } from '../redux/actions';
import getQuestions from '../services/questionsAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
      playerEmail: '',
      isButtonDisabled: true,
      redirect: false,
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { playerName, playerEmail } = this.state;
      const regex = /\S+@\S+\.\S+/;
      this.setState({
        isButtonDisabled: playerName.length === 0 || !regex.test(playerEmail),
      });
    });
  }

    handleClick = async () => {
      const { getToken, history, sendPlayerInfoToStore, getFetchQuestions } = this.props;
      const { playerName, playerEmail } = this.state;
      await getToken();
      sendPlayerInfoToStore(playerName, playerEmail);
      console.log(history);
      const THREE = 3;
      const questionsAPIReturn = await getQuestions();
      if (questionsAPIReturn.response_code === THREE
      || questionsAPIReturn.results.length === 0) {
        localStorage.removeItem('token');
        history.push('/');
      }
      getFetchQuestions(questionsAPIReturn.results[0]);
      this.setState({
        redirect: true,
      });
      // history.push('/game');
    }

    render() {
      const { playerName, playerEmail, isButtonDisabled, redirect } = this.state;
      const { history } = this.props;
      if (redirect) {
        return <Redirect to="/game" />;
      }
      return (
        <>
          <form className="form-login">
            <label htmlFor="input-player-name">
              Jogador:
              <input
                type="text"
                data-testid="input-player-name"
                id="input-player-name"
                name="playerName"
                placeholder="Insira o nome do jogador"
                onChange={ this.handleInputChange }
                value={ playerName }
              />
            </label>
            <label htmlFor="input-gravatar-email">
              E-mail:
              <input
                type="email"
                data-testid="input-gravatar-email"
                id="input-gravatar-email"
                name="playerEmail"
                placeholder="Insira o e-mail do jogador"
                onChange={ this.handleInputChange }
                value={ playerEmail }
              />
            </label>
            <button
              type="button"
              data-testid="btn-play"
              disabled={ isButtonDisabled }
              onClick={ this.handleClick }
            >
              Play
            </button>
          </form>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ () => { history.push('/settings'); } }
          >
            Configurações
          </button>
        </>
      );
    }
}

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  sendPlayerInfoToStore: PropTypes.func.isRequired,
  getFetchQuestions: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  sendPlayerInfoToStore: (playerName, playerEmail) => (
    dispatch(playerInfoToStore(playerName, playerEmail))),
  getFetchQuestions: (payload) => dispatch(actionQuestions(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
