import { Typewriter } from "react-simple-typewriter";
import Image from "../assets/heroimg.png";
const Intro = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl mx-auto px-12 py-20 w-7xl backdrop-blur-sm bg-white/6 p-6 border-white/50">
      <div class="w-79 h-86 border-8 border-pink-900 rounded-xl  ">
        <img src={Image} className="rounded-md" alt="Jobayer Mahmud" />
      </div>

      <div className="flex flex-col items-start text-left w-1/2">
        <h4 className="text-xl font-medium">Hi ,🙋🏼‍♂️I'm</h4>

        <p className="text-5xl mt-3 font-bold text-accent">
          JOBAYER <span className="text-pink-900">MAHMUD</span>
        </p>

        <p className="mt-4 text-5xl text-accent font-semibold">
          I{" "}
          <span className="text-pink-900">
            <Typewriter
              words={["create", "develop", "maintain"]}
              loop={0}
              cursor={false}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>{" "}
          websites
        </p>

        <p className=" text-xl mt-2 w-[80%]">
          I am a Front-End developer, Educator and a Tech enthusiast. I am
          always looking for new opportunities to learn and grow.💗
        </p>
        <div className="flex gap-5 mt-5">
          <a
            target="_blank"
            href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
            className=" px-4 py-2 rounded-md text-white font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105  transition-all duration-100"
          >
            Resume
          </a>
          <a
            href="mailto:jobayermahmud976@gmail.com"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-white font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105  transition-all duration-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
