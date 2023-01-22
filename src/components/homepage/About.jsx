import '../../styles/About.css';
import Features from './about/Features';
import Miu from './about/Miu';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="feature-row">
          <Features />
          <Features />
          <Features />
        </div>
        <Miu />
        <Carousel>
          <div>
            <Features />
          </div>
          <div>
            <Features />
          </div>
          <div>
            <Features />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
