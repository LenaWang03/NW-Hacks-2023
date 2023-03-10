import '../../styles/About.css';
import Features from './about/Features';
import Miu from './about/Miu';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="feature-row">
          <Features feature={"Chatbot"} text={"Connect with a chatbot and answer questions to be redirected to the right mental health service for you."} />
          <Features feature={"Meditation Mode"} text={"Take some time to meditate and unwind to the sound of soothing music."}/>
          <Features feature={"Service Map"} text={"Find mental health clinics and services near you with our Mental health service Map"}/>
        </div>
        <Miu />
      </div>
    </div>
  );
}

export default About;
