import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { FeatureData } from '../components/FeatureData';

const Feature = () => {
  return (
    <>
      <Header />
      <section className="feature">
        <Hero text="feature films" />

        <div className="container">
          <div className="feature-movies">
            {FeatureData.map((data, index) => {
              return (
                <div key={index} className="movie">
                  <img src={data.src} alt="" />
                  <h4>{data.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Feature;
