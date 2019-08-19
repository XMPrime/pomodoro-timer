import React, { Component } from "react";
import { connect } from "react-redux";
import { switchMode } from "../actions/actions";
import { displayTimeLeft } from "../utilities";

class Timer extends Component {
  switchMode = () => {
    this.props.switchMode();
  };

  render() {
    return (
      <div>
        <h1>{this.props.workMode ? "Time until break!" : "Time until work!"}</h1>
        <h1 className={this.props.workMode ? "workTimer" : "breakTimer"} onClick={() => this.props.switchMode()}>
          {displayTimeLeft(this.props.timerSeconds)}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workTime: state.timeSetterReducers.workTime,
  breakTime: state.timeSetterReducers.breakTime,
  timerSeconds: state.timerReducers.timerSeconds,
  isTicking: state.startStopReducer.isTicking,
  workMode: state.timerReducers.workMode
});

const mapDispatchToProps = {
  switchMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
