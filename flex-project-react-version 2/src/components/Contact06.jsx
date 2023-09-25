import "../css/lightbox.min.css";
import "../css/style.css";
import "../css/utilities.css";

const Contact06 = () => {
  return (
          <section id="contact" className="contact flex-columns">
            <div className="row">
              <div className="column">
                <div className="column-1">
                  <img src="./src/assets/home/contact.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="column-2 bg-light">
                  <h2>Request Callback</h2>
                  <form action="" className="callback-form">
                    <div className="form-control">
                      <label htmlFor="name" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="email" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="phone" />
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter phone"
                      />
                    </div>
                    <input
                      type="submit"
                      defaultValue="Send"
                      id="submit"
                      className="btn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Contact06
