import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-(--text-bg)">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <section className="min-h-screen flex items-center py-10 sm:py-16">
          <Intro></Intro>
        </section>
        <section>
          <AboutMe></AboutMe>
        </section>

        <section className="py-20 text-white border-t border-gray-700">
          <Services></Services>
        </section>
        <Skills></Skills>
        <section className="py-16 text-white">
          <Education></Education>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
