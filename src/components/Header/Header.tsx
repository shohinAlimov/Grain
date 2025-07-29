import { Link, NavLink } from "react-router";

import IconLogo from "../../assets/icons/IconLogo.svg?react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo-link" href="#header">
            <IconLogo
              className="header__logo-icon"
              width={126}
              height={34}
              aria-hidden={true}
            />
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#header">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  Integrations
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  Testimonials
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  Privacy & Security
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <button className="btn header__btn-login">Login</button>
            <button className="btn header__btn-book">Book a Demo</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
