import Image1 from "../assets/p1Img.png";
import Image2 from "../assets/p2Img.png";
import Image3 from "../assets/p3Img.png";
import Image4 from "../assets/p4Img.png";
import Image5 from "../assets/p5Img.png";
import Image6 from "../assets/p6Img.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const ImageCard = () => {
  return (
    <div className="w-full overflow-hidden py-20 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className=" rounded-2xl overflow-hidden shadow-2xl
            w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[24vw]
            h-[50vw] sm:h-[30vw] md:h-[20vw] lg:h-[18vw]"
          >
            <img
              src={img}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
