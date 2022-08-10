import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTimer, timeOver } from '../redux/actions';

class Timer extends React.Component {
  componentDidMount() {
    this.timeToAnswer();
  }

  timeToAnswer = () => {
    const { showTimerAction, timeOverAction } = this.props;
    const TIMEINTERVAL = 1000;
    const MAGICNUMBER = 30;
    let maxTimer = MAGICNUMBER;
    const myInterval = setInterval(() => {
      if (maxTimer > 0) {
        maxTimer -= 1;
        console.log(maxTimer);
        showTimerAction(maxTimer);
      } else if (maxTimer === 0) {
        timeOverAction(true);
        clearInterval(myInterval);
      }
    }, TIMEINTERVAL);
  }

  render() {
    const { timer } = this.props;
    return (
      <p>{ timer }</p>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  showTimerAction: PropTypes.func.isRequired,
  timeOverAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showTimerAction: (payload) => dispatch(showTimer(payload)),
  timeOverAction: (payload) => dispatch(timeOver(payload)),
});

const mapStateToProps = (store) => ({
  timer: store.game.timer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
