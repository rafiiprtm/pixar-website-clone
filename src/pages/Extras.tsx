import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image1 from '../assets/img/extra-img1.jpg';
import ExtraSlider from '../components/ExtraSlider';

const Extras = () => {
  return (
    <>
      <Header />
      <section className="extras">
        <Hero text="pixar: building characters" />

        <div className="container">
          <div className="content">
            <div className="d-flex">
              <div className="characters">
                <h2>pixar: building characters</h2>
                <img src={Image1} alt="" />
                <p>
                  Though Pixar Animation Studios is known for the fantastical
                  ideas that power their films—toys that come to life, an old
                  man flying his house away with thousands of balloons, a family
                  of superheroes—the stories come from the everyday ups and
                  downs of the filmmakers’ own lives. “Our stories talk about
                  the challenges, successes, and joys of our own experiences,”
                  says Pixar’s Chief Creative Officer Pete Docter. “We tell
                  those stories through the metaphors of characters and worlds
                  we’d like to see brought to life.”
                </p>

                <p>
                  From the earliest back-of-envelope notes and sketches to the
                  finishing touches of lighting and effects, Pixar’s filmmakers
                  constantly strive to support the characters’ emotional journey
                  with all the tools at their disposal. Everything you see on
                  screen is designed and built from scratch with the story’s
                  specific needs in mind. Though this is an incredible amount of
                  work, it’s also an incredible opportunity, giving the studio’s
                  filmmakers an unparalleled degree of precision and power in
                  their visual storytelling.
                </p>

                <p>
                  This exhibit will give you an inside view of Pixar’s visual
                  design process, from the perspective of the artists
                  themselves. Though the pieces in these rooms are no more than
                  the smallest fraction of the art that has been created at the
                  studio, they give a sense of the years of experimentation,
                  deliberation, and iteration that go into every film.
                </p>
              </div>

              <aside className="aside">
                <hr />

                <article className="article">
                  <h4>current/upcoming</h4>
                  <div>
                    <p>caixaforum lleida</p>
                    <span>september 16, 2022 - february 26, 2023</span>
                  </div>
                </article>

                <hr />

                <article className="article">
                  <h4>past shows</h4>
                  <div className="mb">
                    <p>caixaforum girona</p>
                    <span>girona, spain</span>
                    <span>april 14, 2022 - august 26, 2023</span>
                  </div>

                  <div className="mb">
                    <p>caixaforum tarragona</p>
                    <span>february 8, 2022 - july 24, 2022</span>
                  </div>

                  <div>
                    <p>caixaforum seville</p>
                    <span>seville, spain</span>
                    <span>november 26, 2020 - march 21, 2021</span>
                  </div>
                </article>
              </aside>
            </div>

            <ExtraSlider />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Extras;
