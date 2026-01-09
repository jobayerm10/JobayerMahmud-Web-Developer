import Image1 from "../assets/p1Img.png";
import Image2 from "../assets/p2Img.png";
import Image3 from "../assets/p3Img.png";
import Image4 from "../assets/p4Img.png";
import Image5 from "../assets/p5Img.png";
import Image6 from "../assets/p6Img.png";
const ImageCard = () => {
  return (
    <div className="w-full overflow-hidden py-20">
      <div className="flex items-end gap-8">
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image1} className="h-full w-full bg-center  bg-cover" />
        </div>
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image2} className="h-full w-full bg-center  bg-cover" />
        </div>
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image3} className="h-full w-full bg-center  bg-cover" />
        </div>
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image4} className="h-full w-full bg-center  bg-cover" />
        </div>
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image5} className="h-full w-full bg-center  bg-cover" />
        </div>
        <div className="bg-red-900 h-[500px] w-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={Image6} className="h-full w-full bg-center  bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
