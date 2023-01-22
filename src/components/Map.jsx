import React from 'react';


export default function Focus() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  );
}