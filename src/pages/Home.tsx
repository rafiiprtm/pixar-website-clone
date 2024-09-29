import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import HeroCaption from '../assets/img/hero-caption.png';

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-content">
        <div id="hero">
          <div className="content">
            <div className="hero-img">
              <img src={HeroCaption} alt="Elemental" />
            </div>
          </div>
        </div>
        <div className="container">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
