import { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      ={" "}
      <button
        onClick={() => setOpen(!open)}
        className=" bg-transparent  text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500/10 transition-all"
      >
        {open ? (
          <IoClose size={20} />
        ) : (
          <TfiAlignRight size={20}></TfiAlignRight>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-45 rounded-2xl border text-emerald-100 bg-[#222121] shadow-lg p-4 flex flex-col gap-5 transition-all">
          <a
            href="#home"
            className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors"
          >
            <FaHome />{" "}
            <span className="text-sm">
              <span className="text-green-300 font-extrabold">&lt;</span>
              <span className="font-medium">Home</span>
              <span className="text-green-300 font-extrabold">/&gt;</span>
            </span>
          </a>
          <a
            href="#about"
            className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors"
          >
            <FaUser />{" "}
            <span className="text-sm">
              <span className="text-green-300 font-extrabold">&lt;</span>
              <span className="font-medium">About Me</span>
              <span className="text-green-300 font-extrabold">/&gt;</span>
            </span>
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors"
          >
            <FaBriefcase />{" "}
            <span className="text-sm">
              <span className="text-green-300 font-extrabold">&lt;</span>
              <span className="font-medium">Portfolios</span>
              <span className="text-green-300 font-extrabold">/&gt;</span>
            </span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors"
          >
            <FaEnvelope />{" "}
            <span className="text-sm">
              <span className="text-green-300 font-extrabold">&lt;</span>
              <span className="font-medium">Contact</span>
              <span className="text-green-300 font-extrabold">/&gt;</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
