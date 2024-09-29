import Header from '../components/Header';
import WinLoseLogo from '../assets/img/win-lose-logo.jpg';
import WinLoseImg from '../assets/img/win-lose-big.jpg';
import Footer from '../components/Footer';

const WinLose = () => {
  return (
    <>
      <Header />
      <section className="win-lose">
        <div className="container">
          <div className="logo">
            <img src={WinLoseLogo} alt="Win or lose" />
          </div>

          <div className="content">
            <img className="img" src={WinLoseImg} alt="Win or lose" />

            <p>
              “Win or Lose,” Pixar Animation Studios’ first-ever original
              long-form animated series, follows the Pickles, a co-ed middle
              school softball team, in the week leading up to their championship
              game. Each episode offers a look inside the off-the-field life of
              a character—a player, their parent, the umpire—revealing their
              funny, emotional and always relatable point of view in a unique
              visual style.
            </p>

            <div className="info">
              <h3>“Win or Lose” streams on Disney+ in Fall 2023.</h3>

              <div className="mt">
                <h3>Cast</h3>
                <span>Will Forte (coach)</span>
              </div>

              <div className="mt">
                <h3>Produced by</h3>
                <span>David Lally</span>
              </div>

              <div className="mt">
                <h3>Directed by</h3>
                <span>Carrie Hobson, Michael Yates</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WinLose;
