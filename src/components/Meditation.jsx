import React, { useEffect, useState } from "react";
import Timer from "./meditation/Timer";
import meditatingMiu from "../assets/meditating-miu.svg";
import standingMiu from "../assets/standing-miu.svg";
import WaterWave from "react-water-wave";
import image from "../assets/yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg";
import "../styles/Meditation.css";

export default function Meditation() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const [isMeditating, setMeditating] = useState(false);

  return (
    <div className="container">
      <WaterWave
        imageUrl={image}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {() => (
          <div className="meditation">
            <a
              href="/"
              style={{
                position: "absolute",
                left: "5em",
                top: "5em",
                alignSelf: "flex-start",
              }}
            >
              <button className="link-btn">Home</button>
            </a>
            <img
              src={isMeditating ? meditatingMiu : standingMiu}
              alt="Meditating Miu"
            />
            <Timer
              expiryTimestamp={time}
              isMeditating={isMeditating}
              setMeditating={setMeditating}
            />
          </div>
        )}
      </WaterWave>
    </div>
  );
}
