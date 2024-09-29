import { useState } from 'react';
import Logo from '../assets/img/logo.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  return (
    <>
      <header id="header-section">
        <div className="container">
          <div className="content d-flex">
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>

            {/* <!--NAV TOGGLE BUTTON--> */}
            <div onClick={handleClick} className="toggle-menu">
              {click ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>

            {/* <!--NAV MENU--> */}
            <Navbar click={click} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
