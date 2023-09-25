import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const AboutIcons01 = () => {
  return (
    <section id="about" className="icons bg-light">
      <div className="flex-items">
        <div>
          <i className="fas fa-university fa-2x" />
          <div>
            <h3>Investment Banking</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              iusto!
            </p>
          </div>
        </div>
        <div>
          <i className="fas fa-book-reader fa-2x" />
          <div>
            <h3>Portfolio Manager</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              iusto!
            </p>
          </div>
        </div>
        <div>
          <i className="fas fa-pencil-alt fa-2x" />
          <div>
            <h3>Tax &amp; Custodial</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              iusto!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIcons01;
