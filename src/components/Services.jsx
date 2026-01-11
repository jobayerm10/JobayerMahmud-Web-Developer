import ImageCard from "./ImageCard";
import ClientPriority from "./ServicesParts/ClientPriority";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className=" mt-[10vw] mx-auto max-w-[70vw]">
        <div className="uppercase flex items-center justify-center gap-[2vw]  ">
          <h5 className="text-[#FDA228] tracking-[0.4em]">
            Frontend Web Developer
          </h5>
          <h5 className="text-[#FDA228] tracking-[0.4em]">& UI Enthusiast</h5>
        </div>
        <p className="text-center text-[4.2vw] font-[font2]">
          Impactful branding and high-end <br /> productive websites for
          creatives.
        </p>
        <div className="-tracking-[0.1vw] flex items-center justify-center">
          <a
            target="_blank"
            href=""
            className="  text-[.9vw] px-5 py-3  border-2 rounded-md bg-(--bg-color) text-(--text-color)  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
          >
            Let's start a project together
          </a>
        </div>
      </div>
      <div className="projects h-[20vw]flex-2 mt-20 flex items-center justify-center">
        <ImageCard></ImageCard>
      </div>
      <div className=" flex-1 ">
        <ClientPriority></ClientPriority>
      </div>
    </div>
  );
};

export default Services;
