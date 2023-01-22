import LeftNav from './homepage/LeftNav';
import Landing from './homepage/Landing';
import About from './homepage/About';
import ResourceOverall from './homepage/ResourceOverall';
import Map from './homepage/Map'
import "../styles/Home.css";
import QRCode from './homepage/QRCode'

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
        <Map />
      </section>
      <section className="" id="faq"></section>
      <section className="" id="qrcode">
        <QRCode/>
      </section>
    </div>
  );
}

export default Home;
