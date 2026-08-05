import { useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const setCardRef = (el) => {
    if (!el) return;
    const index = Number(el.dataset.index);
    cardRefs.current[index] = el;
  };

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop: scroll-based fan animation
  useEffect(() => {
    if (isMobile) return;

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
      const startMultiplier = windowWidth < 1024 ? 180 : 240;
      const endMultiplier = windowWidth < 1024 ? 20 : 24;
      const verticalSpread = 18;
      const rotateScale = 5;
      const baseScale = 0.96;

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
  }, [isMobile]);

  // Mobile: track active card on scroll
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const el = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, images.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile: swipe to a specific card (used by dot indicators)
  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  // ── Mobile View ──
  if (isMobile) {
    return (
      <div className="w-full py-10 px-4">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              data-index={index}
              className="snap-center shrink-0 w-[70vw] max-w-[280px] h-[420px] rounded-[1.75rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <img
                src={img}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-(--text-color) scale-110"
                  : "bg-(--text-color)/25"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Desktop View ──
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-20 px-4"
      style={{ perspective: "1200px" }}
    >
      <div className="relative mx-auto flex flex-nowrap items-end justify-center gap-3 overflow-visible px-2 sm:px-4 md:px-6 lg:px-10 min-h-[32rem] md:min-h-[40rem]">
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
