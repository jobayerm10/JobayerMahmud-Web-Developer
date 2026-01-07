import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="bg-(--text-bg) ">
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Intro></Intro>
      </section>
    </div>
  );
};

export default Home;
