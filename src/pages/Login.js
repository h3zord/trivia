import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken, playerInfoToStore } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
      playerEmail: '',
      isButtonDisabled: true,
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

  handleClick = () => {
    const { getToken, history, sendPlayerInfoToStore } = this.props;
    const { playerName, playerEmail } = this.state;
    getToken();
    sendPlayerInfoToStore(playerName, playerEmail);
    console.log(history);
    history.push('/game');
  }

  render() {
    const { playerName, playerEmail, isButtonDisabled } = this.state;
    const { history } = this.props;
    return (
      <>
        <form>
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
};

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  sendPlayerInfoToStore: (playerName, playerEmail) => (
    dispatch(playerInfoToStore(playerName, playerEmail))),
});

export default connect(null, mapDispatchToProps)(Login);
