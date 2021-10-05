import React from "react";
import classNames from "../utils/class-names";

const TimerControl = ({
  isTimerRunning,
  setIsTimerRunning,
  setSession,
  session,
  focusDuration,
  setPaused
}) => {
  function playPause() {
    setIsTimerRunning((prevState) => {
      setPaused(true)
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          setPaused(false)
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  const handleStopSession = () => {
    setIsTimerRunning(false);
    setSession(null);
    setPaused(false)
  };

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            onClick={handleStopSession}
            disabled={!session}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerControl;
