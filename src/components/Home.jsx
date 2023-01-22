import LeftNav from './homepage/LeftNav';
import Landing from './homepage/Landing';
import About from './homepage/About';
import ResourceOverall from './homepage/ResourceOverall';
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
        <ResourceOverall />
      </section>
      <section className="" id="map">
        <h2 className="center green map-header">Interactive Location Map</h2>
        <Map />
      </section>
    </div>
  );
}

export default Home;
