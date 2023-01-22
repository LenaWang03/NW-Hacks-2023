import LeftNav from './homepage/LeftNav'
import Landing from './homepage/Landing'
import About from './homepage/About'

function Home() {

  return (
    <div className="App">
      <LeftNav />
      <section className="" id="home">
        <Landing />
      </section>
      <section className="" id="about">
        <About/>
      </section>
      <section className="" id="faq"></section>
    </div>
  );
}

export default Home;
