
import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const Cases03 = () => {
  return (
          <section id="cases" className="cases flex-grid section-padding">
            <header className="section-header">
              <h4>This is what we do</h4>
              <h2>Business Cases</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, dolore!
              </p>
            </header>
            <div className="row">
              <div className="column">
                <a
                  href="images/cases/cases1.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!"
                >
                  <img src="./src/assets/cases/cases1.jpg" alt="" />
                </a>
                <a
                  href="./src/assets/cases/cases2.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!"
                >
                  <img src="./src/assets/cases/cases2.jpg" alt="" />
                </a>
              </div>
              <div className="column">
                <a
                  href="images/cases/cases3.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
      dolore!"
                >
                  <img src="./src/assets/cases/cases3.jpg" alt="" />
                </a>
                <a
                  href="./src/assets/cases/cases4.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!"
                >
                  <img src="./src/assets/cases/cases4.jpg" alt="" />
                </a>
              </div>
              <div className="column">
                <a
                  href="./src/assets/cases/cases5.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
      dolore!"
                >
                  <img src="./src/assets/cases/cases5.jpg" alt="" />
                </a>
                <a
                  href="./src/assets/cases/cases6.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!"
                >
                  <img src="./src/assets/cases/cases6.jpg" alt="" />
                </a>
              </div>
              <div className="column">
                <a
                  href="./src/assets/cases/cases7.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
      dolore!"
                >
                  <img src="./src/assets/cases/cases7.jpg" alt="" />
                </a>
                <a
                  href="./src/assets/cases/cases8.jpg"
                  data-lightbox="cases"
                  data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!"
                >
                  <img src="./src/assets/cases/cases8.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
  )
}

export default Cases03
