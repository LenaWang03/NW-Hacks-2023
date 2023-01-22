import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, isMeditating, setMeditating }) {
  // const [running, setRunning] = useState(false)

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  // pause();
  useEffect(() => {
    pause()
  }, [])
  return (
    
    <div style={{textAlign: 'center'}}>
      <h1>Meditate with Miu </h1>
      {/* <p>Timer Demo</p> */}
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button> */}
      <br/>
      <br/>
      <button className={`${isMeditating ? "hidden" : ""}`}onClick={() => {
        resume();
        setMeditating(true);
      }}>Start</button>
      <button className={`${!isMeditating ? "hidden" : ""}`} onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time);
        pause();
        setMeditating(false);
      }}>Reset</button>
    </div>
  );
}

export default Timer;