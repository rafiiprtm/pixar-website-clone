import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TechImageSlider from '../components/TechImageSlider';

const Technology = () => {
  return (
    <>
      <Header />
      <section className="technology">
        <Hero text="renderman" />

        <div className="technology-content">
          <div className="quote">
            <blockquote>
              “What began as an interesting artistic exercise is now an
              indispensable tool. It’s notable that twenty years after putting
              its first pixels on the screen RenderMan remains the benchmark for
              all rendering technology.”
            </blockquote>
            <p>— GEORGE LUCAS</p>

            <hr />

            <a href="#" className="btn">
              visit renderman.pixar.com
            </a>

            <hr />
          </div>

          <div className="technology-text">
            <p>
              RenderMan® is Pixar’s Academy Award®-winning rendering technology,
              excelling at producing stunning imagery for VFX and feature film
              animation. RenderMan is constantly evolving to meet new creative
              and technical challenges and to take advantage of the latest
              advances in computer technology.
            </p>
            <hr />
          </div>

          <div className="container">
            <TechImageSlider />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Technology;
