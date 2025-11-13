import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

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
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
