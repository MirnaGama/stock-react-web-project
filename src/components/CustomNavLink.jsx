import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ index, color = '#000', title = "", route = "", icon }) => {

  return (
    <><NavLink
      key={index}
      to={route}
      className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
      <div className="nav-icon" style={{ color: color }}>{icon}</div>
      <span className="nav-label">{title}</span>
    </NavLink>
    </>
  );
};

export default CustomNavLink;