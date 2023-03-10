import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import music from '../../assets/music/music.mp3'

import '../../styles/Meditation.css'

function Timer({ expiryTimestamp, isMeditating, setMeditating }) {
  // const [audio, setAudio] = useState(null)
  let audio = new Audio(music);
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  function to2Digit(num) {
    let str = num.toString();
    if (str.length == 1) {
      return "0" + str;
    }
    return str;
  }
  // pause();
  useEffect(() => {
    pause()
  }, [])
  return (
    
    <div style={{textAlign: 'center'}}>
      <h1 style={{color: "linear-gradient(125.35deg, #c2efba 24.24%, #bed0ff 59.9%)"}}>Meditate with Miu </h1>
      <div style={{fontSize: '100px'}}>
        <span>{to2Digit(minutes)}</span>:<span>{to2Digit(seconds)}</span>
      </div>
      <br/>
      <br/>
      <button className={`${isMeditating ? "hidden" : ""} link-btn`} onClick={() => {
        audio.loop = true;
        audio.play()
        resume();
        setMeditating(true);
      }}>Start</button>
      <button className={`${!isMeditating ? "hidden" : ""} link-btn`} onClick={() => {
        // Restarts to 5 minutes timer
        window.location.reload(); // used this because audio won't pause
        // if (audio != null) {
        //   audio.pause();
        //   audio.currentTime = 0;
        // }
        // const time = new Date();
        // time.setSeconds(time.getSeconds() + 600);
        // restart(time);
        // pause();
        // setMeditating(false);
      }}>Reset</button>
    </div>
  );
}

export default Timer;