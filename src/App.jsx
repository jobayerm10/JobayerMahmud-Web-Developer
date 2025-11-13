import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center bg-linear-to-r from-[#4d3259] via-[#141e34] to-[#121c33] py-10 sm:py-16"
        >
          <Intro></Intro>
        </section>
        <AboutMe></AboutMe>

        <section
          id="section"
          className="py-20 bg-linear-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white border-t border-gray-700"
        >
          <Services></Services>
        </section>
        <Skills></Skills>
        <section
          id="education"
          className="py-16 bg-linear-to-br from-[#0a0f1f] via-[#1a103d] to-[#0a0a0a] text-white"
        >
          <Education></Education>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
