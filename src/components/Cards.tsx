import CareersImg from '../assets/img/careers.jpeg';
import ElioImg from '../assets/img/elio.jpg';
import WinLoseImg from '../assets/img/win-lose.jpg';
import Card from './Card';

const Cards = () => {
  return (
    <div className="cards">
      <Card
        CardImg={CareersImg}
        text="careers at pixar"
        path="careers-at-pixar"
      />
      <Card
        CardImg={ElioImg}
        text="elio"
        path="https://www.youtube.com/watch?v=2w_K3CB8PuE"
        target="target"
      />
      <Card CardImg={WinLoseImg} text="win or lose" path="winlose" />
    </div>
  );
};

export default Cards;
