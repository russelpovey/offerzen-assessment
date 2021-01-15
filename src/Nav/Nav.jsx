import "./Nav.css";
import logo from "../assets/Logo.png";

function Nav() {
  return (
    <nav className="top-nav">
      <div className="container pad-h flex-center">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}

export default Nav;
