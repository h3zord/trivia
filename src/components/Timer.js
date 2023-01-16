import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Timer extends React.Component {
  render() {
    const { timer } = this.props;
    return (
      <p data-testid="timer" className="timer">
        Timer:
        {' '}
        { timer }
      </p>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
};

const mapStateToProps = (store) => ({
  timer: store.game.timer,
});

export default connect(mapStateToProps)(Timer);
