import React, { useEffect, useState } from 'react';
import Timer from './meditation/Timer'
import meditatingMiu from '../assets/meditating-miu.svg'
import standingMiu from '../assets/standing-miu.svg'

export default function Meditation() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const [isMeditating, setMeditating] = useState(false);

  return (
    <div>
      <img src={isMeditating ? meditatingMiu : standingMiu} alt="Meditating Miu" />
      <Timer expiryTimestamp={time} isMeditating={isMeditating} setMeditating={setMeditating}/>
    </div>
  );
}