import "./styles.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="nav">
      <p className="title">Planet Search</p>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
