import litteLogo from "../../assets/litte-logo.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer-informations">
        <p>
          STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os
          direitos reservados
        </p>
        <span>|</span>
        <img src={litteLogo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
