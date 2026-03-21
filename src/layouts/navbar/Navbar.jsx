import { FaBox, FaBoxesStacked, FaTruck, FaUsersRays, FaWarehouse } from "react-icons/fa6";
import './Navbar.css';
import CustomNavLink from "../../components/custom-nav-link/CustomNavLink";

const navItems = [
  {
    path: '/',
    icon: <FaBox />,
    title: "Products"
  },
  {
    path: '/',
    icon: <FaBoxesStacked />,
    title: "Stock"
  },
  {
    path: '/suppliers',
    icon: <FaTruck />,
    title: "Suppliers"
  },
  {
    path: '/',
    icon: <FaUsersRays />,
    title: "Depositors"
  },
  {
    path: '/',
    icon: <FaWarehouse />,
    title: "Addresses"
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item, index) => (
          <CustomNavLink
            index={index}
            route={item.path}
            color="white"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            title={item.title}
            icon={item.icon}>
          </CustomNavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;