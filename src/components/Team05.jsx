import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const Team05 = () => {
  return (
    <section id="team" className="team section-padding">
      <header className="section-header">
        <h4>Who we are</h4>
        <h2>Our Professional Team</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          dolore!
        </p>
      </header>
      <div className="flex-items">
        <div>
          <img src="/assets/team/person1.jpg" alt="" />
          <h4>John Doe</h4>
          <p>President</p>
        </div>
        <div>
          <img src="/assets/team/person2.jpg" alt="" />
          <h4>Jane Doe</h4>
          <p>Vice President</p>
        </div>
        <div>
          <img src="/assets/team/person3.jpg" alt="" />
          <h4>Steve Smith</h4>
          <p>Marketing Head</p>
        </div>
      </div>
    </section>
  );
};

export default Team05;
