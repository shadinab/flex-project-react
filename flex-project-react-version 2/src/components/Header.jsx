import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const Header = () => {
  return (
    <header className="hero">
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span className="text-primary">
            <i className="fas fa-book-open" /> Edge
          </span>
          Ledger
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cases">Cases</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>The Sky Is The Limit</h1>
        <p>We provide world class financial assistance</p>
        <a href="#about" className="btn">
          <i className="fas fa-chevron-right" /> Read More
        </a>
      </div>
    </header>
  );
};

export default Header;
