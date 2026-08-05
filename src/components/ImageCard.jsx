import { useEffect, useRef } from "react";
import Image1 from "../assets/p1Img.png";
import Image2 from "../assets/p2Img.png";
import Image3 from "../assets/p3Img.png";
import Image4 from "../assets/p4Img.png";
import Image5 from "../assets/p5Img.png";
import Image6 from "../assets/p6Img.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const ImageCard = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const setCardRef = (el) => {
    if (!el) return;
    const index = Number(el.dataset.index);
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    const updateCards = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1,
      );
      const centerIndex = (images.length - 1) / 2;
      const startMultiplier =
        windowWidth < 640 ? 120 : windowWidth < 1024 ? 180 : 240;
      const endMultiplier =
        windowWidth < 640 ? 16 : windowWidth < 1024 ? 20 : 24;
      const verticalSpread = windowWidth < 640 ? 12 : 18;
      const rotateScale = windowWidth < 640 ? 3 : 5;
      const baseScale = windowWidth < 640 ? 0.92 : 0.96;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const distance = index - centerIndex;
        const startX = distance * startMultiplier;
        const endX = distance * endMultiplier;
        const startY = 0;
        const endY = -Math.abs(distance) * verticalSpread;
        const startRotate = 0;
        const endRotate = distance * rotateScale;
        const startScale = baseScale;
        const endScale = 1 - Math.abs(distance) * 0.02;

        const x = startX * (1 - progress) + endX * progress;
        const y = startY * (1 - progress) + endY * progress;
        const rotate = startRotate * (1 - progress) + endRotate * progress;
        const scale = startScale * (1 - progress) + endScale * progress;

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
        card.style.transformOrigin = "center bottom";
        card.style.zIndex = String(images.length - Math.abs(distance));
      });
    };

    updateCards();
    window.addEventListener("scroll", updateCards, { passive: true });
    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("scroll", updateCards);
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-20 px-4"
      style={{ perspective: "1200px" }}
    >
      <div className="relative mx-auto flex flex-nowrap items-end justify-center gap-3 overflow-visible px-2 sm:px-4 md:px-6 lg:px-10 min-h-[26rem] sm:min-h-[32rem] md:min-h-[40rem]">
        {images.map((img, index) => (
          <div
            key={index}
            data-index={index}
            ref={setCardRef}
            className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-out will-change-transform"
            style={{
              width: "clamp(120px, 18vw, 240px)",
              height: "clamp(180px, 27vw, 360px)",
              transformOrigin: "center bottom",
            }}
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
