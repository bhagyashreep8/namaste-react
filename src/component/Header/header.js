import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import MultiSelectCheckboxDropdown from './MultiSelectCheckboxDropdown'

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleOnClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <MultiSelectCheckboxDropdown options={options}/>
      <div className="navbar-container">
        <ul className="nav-items">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About Us</Link></li>
          <li><Link to="/contact" className="link">Contact Us </Link></li>
          <li>Cart</li>
          <button className="login" onClick={handleOnClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
