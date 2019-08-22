import React, { Component } from "react";
import { connect } from "react-redux";
import { switchMode, workTimeTick, breakTimeTick, reset, startStopToggle } from "../actions/actions";

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

  displayTimeLeft(seconds) {
    let secondsLeft = seconds;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = Math.round(secondsLeft % 60);
    let countdown;

    if (this.props.isTicking) {
      console.log("tick");
      countdown = setInterval(() => {
        clearInterval(countdown);
        this.props.workMode ? this.workTimeTick() : this.breakTimeTick();
      }, 1000);
    }

    const display = `${minutes < 10 ? "0" : ""}${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;

    if (display === "00:00") {
      clearInterval(countdown);
      this.switchMode();
      this.reset();

      return;
    }

    return display;
  }

  render() {
    return (
      <div>
        <h1>{this.props.workMode ? "Time until break!" : "Time until work!"}</h1>
        <h1 className={this.props.workMode ? "workTimer" : "breakTimer"}>
          {this.props.workMode ? this.displayTimeLeft(this.props.workTimerSeconds) : this.displayTimeLeft(this.props.breakTimerSeconds)}
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
  isTicking: state.startStopReducer.isTicking,
  workMode: state.timerReducers.workMode
});

const mapDispatchToProps = {
  switchMode,
  workTimeTick,
  breakTimeTick,
  startStopToggle,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
