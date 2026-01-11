import footerImage from "../assets/footerImg3.jpg";

export const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[45vw] overflow-hidden group">
        <div>
          <img
            src={footerImage}
            alt="Footer"
            className="absolute inset-0 w-full h-[45vw] opacity-100 hover:opacity-5 object-cover scale-100 group-hover:scale-102 transition-all duration-500 object-center  "
          />
        </div>

        <div className="relative z-20 min-h-[45vw] flex h-full flex-col items-center justify-center gap-[1vw] text-white ">
          <h1 className="font-[font1] text-[3.5vw]">Let's meet!</h1>
          <p className="text-center text-[1vw]">
            We can attend a session where we will discuss <br /> your project,
            your issues and how to solve them.
          </p>
          <a
            target="_blank"
            href=""
            className="  text-[.9vw] mt-5 px-5 py-3  border-4 rounded-md  text-(--text-bg)  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
          >
            Start a project
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between px-[8vw] bg-(--text-color) w-full h-[8vw] text-[1vw] text-(--text-bg) ">
        <h1>Jobayer – Handcrafted in React, fueled by coffee ☕</h1>
        <a
          target="_blank"
          href="mailto:jobayermahmud976@gmail.com"
          className="text-[0.9vw] px-5 py-3  hover:border-2 rounded-md bg-(--text-color) text-(--text-bg) transition-all duration-300 ease-out hover:px-9 shadow-md hover:shadow-lg
     "
        >
          @jobayer
        </a>
      </div>
    </div>
  );
};
