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
  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //   gsap.from(".hero", {
  //     height: "50px",
  //     stagger: {
  //       amount: 0.4,
  //     },
  //     scrollTrigger: {
  //       trigger: ".parent",
  //       markers: true,
  //       start: "top 100%",
  //       end: "top -150%",
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <div className="p-4">
      {/* <h2 className="font-[font2] text-[6.5vw] uppercase text-center">
        What I’ve Built{" "}
      </h2> */}
      <div className="sunmmery mt-[10vw] mx-auto max-w-[70vw]">
        <p className="text-center text-[2.5vw] font-[font1]">
          These are some of the projects I’ve created while learning and
          improving my development skills. Each project reflects my journey in
          frontend development and problem-solving.
        </p>
      </div>
      <div className="mt-[5vw]">
        <div className=" parent">
          {projects.map((elem, index) => {
            return (
              <div
                key={index}
                className=" hero w-full h-[550px] flex mb-3 gap-5"
              >
                <ProjectCard
                  image1={elem.image1}
                  image2={elem.image2}
                ></ProjectCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
