import Image1 from "../assets/p1Img.png";
import Image2 from "../assets/p2Img.png";
import Image3 from "../assets/p3Img.png";
import Image4 from "../assets/p4Img.png";
import Image5 from "../assets/p5Img.png";
import Image6 from "../assets/p6Img.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      image1: Image1,
      image2: Image2,
    },
    {
      image1: Image3,
      image2: Image4,
    },
    {
      image1: Image5,
      image2: Image6,
    },
    {
      image1: Image1,
      image2: Image2,
    },
    {
      image1: Image3,
      image2: Image4,
    },
    {
      image1: Image5,
      image2: Image6,
    },
    {
      image1: Image1,
      image2: Image2,
    },
    {
      image1: Image3,
      image2: Image4,
    },
    {
      image1: Image5,
      image2: Image6,
    },
    {
      image1: Image1,
      image2: Image2,
    },
    {
      image1: Image3,
      image2: Image4,
    },
    {
      image1: Image5,
      image2: Image6,
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* <h2 className="font-[font2] text-[6.5vw] uppercase text-center">
        What I’ve Built{" "}
      </h2> */}
      <div className="text-center mt-[25vw] lg:mt-[10vw] mx-auto max-w-full md:max-w-[80vw] lg:max-w-[70vw]">
        <p className=" text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-[font2]">
          These are some of the projects I’ve created while learning and
          improving my development skills. Each project reflects my journey in
          frontend development and problem-solving.
        </p>
      </div>
      <div className="mt-[8vw] sm:mt-[5vw] flex justify-center">
        <div className="parent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-7 justify-items-center">
          {projects.map((elem, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl
            w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[24vw]
            h-[50vw] sm:h-[30vw] md:h-[20vw] lg:h-[18vw]"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
