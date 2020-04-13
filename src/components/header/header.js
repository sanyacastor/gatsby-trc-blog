import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
        <ul className="nav-list">
          <li>
            <Link to="/races/" className="nav-list__item nav-list__item--race">Гонки</Link>
          </li>
          <li>
            <Link to="/news/" className="nav-list__item nav-list__item--nav_news">Новости</Link>
          </li>
          <li>
            <Link to="/users/" className="nav-list__item nav-list__item--nav_hero">Участники</Link>
          </li>
           <li>
            <Link to="/tapes/" className="nav-list__item nav-list__item--nav_hero">Пленки</Link>
          </li>
        </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
