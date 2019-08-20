import React, { Component } from "react";
import { connect } from "react-redux";
import { switchMode, workTimeTick, breakTimeTick, reset } from "../actions/actions";

class Timer extends Component {
  switchMode = () => {
    this.props.switchMode();
  };
  workTimeTick = () => {
    this.props.workTimeTick();
  };
  breakTimeTick = () => {
    this.props.breakTimeTick();
  };
  reset = () => {
    this.props.reset();
  };

  render() {
    const displayTimeLeft = seconds => {
      let secondsLeft = seconds;
      const minutes = Math.floor(seconds / 60);
      secondsLeft = Math.round(secondsLeft % 60);

      if (this.props.isTicking) {
        let countdown = setInterval(() => {
          clearInterval(countdown);
          if (this.props.isTicking) {
            if (this.props.workTimerSeconds <= 0 || this.props.workTimerSeconds <= 0) {
              clearInterval(countdown);
              this.switchMode();
              this.reset();
              return;
            }
          } else {
            clearInterval(countdown);
            return;
          }
          this.props.workMode ? this.workTimeTick() : this.breakTimeTick();
        }, 200);
      }

      const display = `${minutes < 10 ? "0" : ""}${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
      return display;
    };

    return (
      <div>
        <h1>{this.props.workMode ? "Time until break!" : "Time until work!"}</h1>
        <h1 className={this.props.workMode ? "workTimer" : "breakTimer"}>
          {this.props.workMode ? displayTimeLeft(this.props.workTimerSeconds) : displayTimeLeft(this.props.breakTimerSeconds)}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workTime: state.timeSetterReducers.workTime,
  breakTime: state.timeSetterReducers.breakTime,
  workTimerSeconds: state.timeSetterReducers.workTimerSeconds,
  breakTimerSeconds: state.timeSetterReducers.breakTimerSeconds,
  // workTimeTick: state.timeSetterReducers.workTimeTick,
  // breakTimeTick: state.timeSetterReducers.breakTimeTick,
  isTicking: state.startStopReducer.isTicking,
  workMode: state.timerReducers.workMode
});

const mapDispatchToProps = {
  switchMode,
  workTimeTick,
  breakTimeTick,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
