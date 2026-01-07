import Lottie from "lottie-react";
import animationData from "../assets/intro-animation.json";

const IntroGif = () => {
  return (
    <div>
      <Lottie
        className="w-[90%] max-w-[520px] md:w-[420px] lg:w-[500px] h-auto object-cover md:ml-5 max-md:w-[75%]"
        animationData={animationData}
        loop
        autoplay
      />
    </div>
  );
};

export default IntroGif;
