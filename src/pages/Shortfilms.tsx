import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShortFilmsData } from '../components/ShortFilmsData';

const Shortfilms = () => {
  return (
    <>
      <Header />
      <section className="shortfilms">
        <Hero text="theatrical shorts" />
        <div className="container">
          <div className="shortfilms-content">
            <p>
              At Pixar, we LOVE shorts! In fact, our first ventures in
              storytelling through film were with short films and commercials.
              Beginning with Luxo Jr., shorts have allowed us to tell stories in
              different ways than our feature films, but often with just as much
              emotional impact.
            </p>

            <p>
              Innovative storytelling has always been at the core of Pixar’s
              foundation, and our shorts allow the freedom to experiment and
              develop both new ways to tell stories and new technologies – many
              of which often then go on to be used in our feature films. Just as
              important, our short films also allow us to cultivate the next
              generation of storytellers here at the studio, letting individuals
              work on smaller teams and often hold leadership positions for the
              first time.
            </p>

            <hr />

            <div className="shortfilms-movies">
              {ShortFilmsData.map((data, index) => {
                return (
                  <div key={index} className="movie">
                    <img src={data.src} alt="" />
                    <h4>{data.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shortfilms;
