import "./choose-module/choose-module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main__footer">
      <Link to="/summary">
        <button className="footer__btn">
          Далее <span>&rarr;</span>
        </button>
      </Link>
    </div>
  );
}

export default Footer;
