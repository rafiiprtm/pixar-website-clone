import { Link } from 'react-router-dom';

interface CardProps {
  path: string;
  target?: string;
  CardImg: string;
  text: string;
}

const Card = ({ path, target, CardImg, text }: CardProps) => {
  return (
    <>
      <div className="card">
        <Link to={path} target={target}>
          <img src={CardImg} alt="" />
        </Link>
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default Card;
