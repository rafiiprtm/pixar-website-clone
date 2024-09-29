import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

interface ClickProps {
  click: boolean;
}

const Navbar = ({ click }: ClickProps) => {
  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/feature">feature films</NavLink>
          </li>
          <NavLinks />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
