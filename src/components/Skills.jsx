import React from "react";

const skillsData = [
  {
    title: "HTML5",
    desc: "Structuring content with semantic and accessible markup.",
    tags: ["Forms", "Canvas", "SEO"],
    icon: "",
  },
  {
    title: "CSS3",
    desc: "Styling with Flexbox, Grid, animations, and responsive design.",
    tags: ["Flexbox", "Grid", "Animations"],
    icon: "",
  },
  {
    title: "JavaScript",
    desc: "Core language powering interactivity and dynamic web apps.",
    tags: ["ES6+", "Async", "DOM"],
    icon: "",
  },
  {
    title: "Styling Tools",
    desc: "Utility-first and component-based styling frameworks.",
    tags: ["Tailwind", "Bootstrap", "Sass"],
    icon: "",
  },
  {
    title: "React.js",
    desc: "Component-based UI development with hooks and state management.",
    tags: ["Hooks", "Context API", "SPA"],
    icon: "",
  },
  {
    title: "Next.js",
    desc: "Hybrid framework with SSR, SSG, API routes and fast routing.",
    tags: ["SSR", "SSG", "Routing"],
    icon: "",
  },
];

const Skills = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-10">
      <div className="sunmmery mt-25 sm:mt-16 lg:mt-20 flex flex-col items-center text-center">
        <h1 className="text-4xl xs:text-3xl sm:text-4xl md:text-[3vw] lg:text-[2.5vw] font-[font2] font-bold">
          The Frontend Tools I work with
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl mt-8 pb-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill, idx) => (
              <div
                key={skill.title}
                className={
                  "p-4 xs:p-5 md:p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#34d399] transition duration-300 hover:scale-105 shadow-md flex flex-col h-full"
                }
              >
                <div className="flex items-center gap-2 mb-2">
                  {/* You could add icons here. */}
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="w-6 h-6"
                    />
                  ) : (
                    <span className="w-6 h-6" />
                  )}
                  <h3 className="text-base xs:text-lg md:text-xl font-bold text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 text-xs xs:text-sm md:text-base">
                  {skill.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2c2c2c] px-3 py-1 rounded-full text-xs md:text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
