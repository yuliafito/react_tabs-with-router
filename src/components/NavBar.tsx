import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getNavClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={getNavClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
