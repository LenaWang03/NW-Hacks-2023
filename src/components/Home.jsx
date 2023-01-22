import LeftNav from "./homepage/LeftNav";
import Landing from "./homepage/Landing";
import About from "./homepage/About";
import ResourceOverall from "./homepage/ResourceOverall";
import Map from "./homepage/Map";
import "../styles/Home.css";
import QRCode from "./homepage/QRCode";
import footer from "../assets/footer.png";

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
      <section className="" id="faq"></section>
      <section className="" id="qrcode">
        <QRCode />
      </section>
      <div className="footer-container">
        <p>
          The information provided on this website is created and compiled by
          students for educational and informational purposes only. It is not
          intended to be a substitute for professional medical advice or
          treatment. The creators of this website are not licensed professionals
          and do not endorse or recommend any specific treatment or other
          information that may be mentioned on the website.
        </p>
        <img src={footer} alt="" className="footer" />
      </div>
    </div>
  );
}

export default Home;
