const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 h-full group transition-all  relative border-5 border-gray-500 rounded-2xl hover:rounded-[60px] overflow-hidden ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/30 ">
          <h2 className="text-5xl font-[font1] uppercase border-4 px-3 py-2 rounded-full cursor-pointer text-white border-white">
            View Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full group transition-all  relative border-5 border-gray-500 rounded-2xl hover:rounded-[60px] overflow-hidden ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/30 ">
          <h2 className="text-5xl font-[font1] uppercase border-4 px-3 py-2 rounded-full cursor-pointer text-white border-white">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
