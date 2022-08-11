import md5 from 'crypto-js/md5';
import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  goHomeButton = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {
          ranking.map((rank, index) => (
            <div key={ index }>
              <img
                src={ `https://www.gravatar.com/avatar/${md5(rank.picture).toString()}` }
                alt="GravatarImage"
                data-testid="header-profile-picture"
              />
              <p data-testid={ `player-name-${index}` }>{rank.name}</p>
              <p data-testid={ `player-score-${index}` }>{rank.score}</p>
            </div>
          ))
        }

        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.goHomeButton }
        >
          Go Home!
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ranking;
