import LeftNav from './homepage/LeftNav';
import Landing from './homepage/Landing';
import About from './homepage/About';
import ResourceOverall from './homepage/ResourceOverall';
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
    </div>
  );
}

export default Home;
