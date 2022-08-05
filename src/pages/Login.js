import React from 'react';

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
  }

  render() {
    const { playerName, playerEmail, isButtonDisabled } = this.state;
    return (
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
    );
  }
}

export default Login;
