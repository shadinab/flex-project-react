import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="social">
        <a href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-youtube fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-linkedin fa-2x" />
        </a>
      </div>
      <p>Copyright © 2020 - EdgeLedger</p>
    </footer>
  );
};

export default Footer;
