import Header from "./components/Header";
import AboutIcons01 from "./components/AboutIcons01";
import AboutSolutions02 from "./components/AboutSolutions02";
import Cases03 from "./components/cases03";
import Blog04 from "./components/Blog04";
import Team05 from "./components/Team05";
import Contact06 from "./components/Contact06";
import Footer from "./components/Footer";

import "./css/lightbox.min.css";
import "./css/style.css";
import "./css/utilities.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <AboutIcons01 />
          <AboutSolutions02 />
          <Cases03 />
          <Blog04 />
          <Team05 />
          <Contact06 />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
