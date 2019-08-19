let countdown;
let isTicking = this.props.isTicking;
let timeLeft;

export const timer = seconds => {
  clearInterval(countdown); // clear any existing timers
  //   document.getElementById("pause").disabled = false;
  //   pauseResume.addEventListener("click", pause);

  const now = Date.now();
  const then = now + seconds * 1000; //milliseconds
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now()) / 1000;
    if (isTicking) {
      if (secondsLeft < 0) {
        clearInterval(countdown);
        // displayTimeLeft(0);
        // switchMode();
        return;
      }
    } else {
      timeLeft = Math.round(secondsLeft);
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 100);
};

export const displayTimeLeft = seconds => {
  let secondsLeft = seconds;
  secondsLeft = secondsLeft % 3600;
  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = Math.round(secondsLeft % 60);

  const display = `${minutes < 10 ? "0" : ""}${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  return display;
};
