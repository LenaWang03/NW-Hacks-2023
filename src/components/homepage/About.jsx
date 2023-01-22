import '../../styles/About.css';
import Features from './about/Features';
import Miu from './about/Miu';

function About() {
  return (
    <div className="about">
      <div className='about-container'>
        <div className="feature-row">
          <Features />
          <Features />
          <Features />
        </div>
        <Miu />
      </div>
    </div>
  );
}

export default About;
