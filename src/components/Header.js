import md5 from 'crypto-js/md5';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// alterando

class Header extends React.Component {
  render() {
    const { playerName, playerScore, playerEmail } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${md5(playerEmail).toString()}` }
          alt="ProfileAVATAR"
        />
        <p data-testid="header-player-name">{ playerName }</p>
        <p data-testid="header-score">{ playerScore }</p>
      </header>
    );
  }
}

Header.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
  playerEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  playerName: store.login.playerName,
  playerScore: store.game.score,
  playerEmail: store.login.playerEmail,
});

export default connect(mapStateToProps)(Header);
