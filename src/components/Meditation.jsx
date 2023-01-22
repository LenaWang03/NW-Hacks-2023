import React, { useEffect, useState } from 'react';
import Timer from './meditation/Timer'

export default function Meditation() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  );
}