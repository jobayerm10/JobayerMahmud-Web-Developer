import image from "../assets/heroImg1.png";

const Hero = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center mt-20 px-4 md:px-0 relative overflow-hidden">
      <h3 className="lg:text-[1.5vw] md:text-[10vw] text-(--text-color) mb-2 ">
        👋, My name is Jobayer and I am an aspiring
      </h3>
      <img className="relative z-10" src={image} alt="" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <h1 className="text-(--text-color) sm:text-[17vw] md:text-[20vw] lg:text-[14vw] font-[font3] uppercase leading-none">
            Web Developer
          </h1>

          <p className="absolute bottom-0 right-0 translate-y-full text-[1.2vw] text-(--text-color)">
            Based in Rajshahi,Bangladesh.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5 ">
        <a
          href="mailto:jobayermahmud976@gmail.com"
          className="text-xl px-5 py-5 font-medium border rounded-md bg-[#2b2a2a] hover:bg-[#1B1B1B] text-white hover:scale-110 hover:-translate-y-1
                   transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          You need a developer
        </a>

        <a
          target="_blank"
          href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
          className="text-xl px-8 py-5 font-medium border rounded-md bg-gray-200 transition-all hover:bg-gray-300 text-[#3d3d3d] hover:scale-110 hover:-translate-y-1"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
