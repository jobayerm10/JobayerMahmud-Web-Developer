import React from "react";

const Education = () => {
  return (
    <div className="max-w-[1420px] m-auto undefined">
      {/* First div */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl font-bold mb-4">
          My <span className="text-purple-700">Education</span>
        </h3>
        <p className="text-[16px] text-gray-400 ">
          A timeline of my academic journey and achievements.
        </p>
      </div>

      {/* Second div */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-items-center">
        <div className="relative border-l border-gray-700 pl-6">
          <div className="mb-10 relative">
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full"></span>
            <div className="bg-[#181818] p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_#7c3aed] transition">
              <span className="text-sm text-purple-400 font-semibold">
                2023 - Present
              </span>
              <h4 className="text-xl font-bold mt-1">B.Sc in Physics</h4>
              <h5 className="text-gray-400 font-medium">Rajshahi College</h5>
              <p className="text-gray-300 mt-2 text-sm">
                Currently pursuing a Bachelor’s degree in Physics
              </p>
            </div>
          </div>
          <div className="mb-10 relative">
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full"></span>
            <div className="bg-[#181818] p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_#7c3aed] transition">
              <span className="text-sm text-purple-400 font-semibold">
                2019 - 2021
              </span>
              <h4 className="text-xl font-bold mt-1">
                Higher Secondary Certificate (HSC)
              </h4>
              <h5 className="text-gray-400 font-medium">
                Govt. Azizul Haque College
              </h5>
              <p className="text-gray-300 mt-2 text-sm">
                Completed HSC in Science group
              </p>
            </div>
          </div>
          <div className="mb-10 relative">
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full"></span>
            <div className="bg-[#181818] p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_#7c3aed] transition">
              <span className="text-sm text-purple-400 font-semibold">
                2011 - 2019
              </span>
              <h4 className="text-xl font-bold mt-1">
                Secondary School Certificate (SSC)
              </h4>
              <h5 className="text-gray-400 font-medium">
                Rangpur Zilla School
              </h5>
              <p className="text-gray-300 mt-2 text-sm">
                Completed SSC in Science group with good academic performance
                and strong analytical skills.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Education;
