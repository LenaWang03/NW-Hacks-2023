import LeftNav from './homepage/LeftNav';
import Landing from './homepage/Landing';
import About from './homepage/About';
import Resources from './homepage/Resources';
import Map from './homepage/Map'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <LeftNav />
      <section className="" id="home">
        <Landing />
      </section>
      <section className="" id="about">
        <About />
      </section>
      <section className="" id="resources">
        <Resources />
      </section>
      <section className="" id="map">
        <Map />
      </section>
    </div>
  );
}

export default Home;
