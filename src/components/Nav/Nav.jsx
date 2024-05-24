import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <NavLink className={({ isActive }) => (isActive ? s['link-active'] : s.link)}
        to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? s['link-active'] : s.link)}
        to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;