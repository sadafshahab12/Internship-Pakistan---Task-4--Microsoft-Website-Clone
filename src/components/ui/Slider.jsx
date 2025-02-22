import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaCirclePause } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    title: "Copilot is your AI companion",
    description:
      "Always by your side, ready to support you whenever and wherever you need it.",
    buttonText: "Download the Copilot app",
    image: "/slider/slider1.avif",
    bgColor: "#fef4ea",
  },
  {
    id: 2,
    title: "Achieve the extraordinary",
    description:
      "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
    buttonText: "Shop Microsoft 365",
    image: "/slider/slider2.avif",
    bgColor: "#aec2fd",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen">
      <div className="relative w-full md:h-[500px] h-full  overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute w-full h-full z-20 flex transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Text Content on Left */}
            <div className="w-[28rem] text-black px-20 ml:flex hidden flex-col justify-center">
              <h1 className="text-24 font-semibold mb-4">{slide.title}</h1>
              <p className="text-16 mb-6">{slide.description}</p>
              <button className="bg-blue w-60  text-white px-3 py-2 text-16 font-semibold ">
                {slide.buttonText}
              </button>
            </div>

            {/* Image on Right */}
            <div className="w-full h-full absolute -z-30">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover md:object-right object-center"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full">
        {/* small screen  */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute  w-full h-full z-20 flex transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Text Content on Left */}
            <div className="w-full absolute -top-30 shadow z-20 p-5 bg-white text-black md:px-20 sm:px-15 px-10 ml:hidden flex flex-col justify-center">
              <h1 className="sm:text-24 text-xl font-semibold mb-4">
                {slide.title}
              </h1>
              <p className="sm:text-16 text-13 mb-6">{slide.description}</p>
              <button className="bg-blue w-60  text-white px-3 py-2 text-16 font-semibold ">
                {slide.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="left-1/2 -translate-x-1/2 absolute ml:bottom-5 md:-bottom-10 sm:-bottom-35 xs:-bottom-35 -bottom-43  flex gap-5  items-center z-50">
        {/* Controls */}
        <div className="  flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className=" bg-opacity-50 p-3 rounded-full"
          >
            {isPlaying ? (
              <FaCirclePause className="w-7 h-7 cursor-pointer" />
            ) : (
              <FaPlayCircle className="w-7 h-7 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Indicators & Navigation */}

        <div className="flex gap-5 items-center">
          <button
            className=" bg-opacity-50 p-3 rounded-full"
            onClick={prevSlide}
          >
            <GoChevronLeft className="w-8 h-8 cursor-pointer" />
          </button>
          <div className=" transform  flex gap-4">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-white border border-black"
                    : "bg-black"
                }`}
              ></span>
            ))}
          </div>
          <button
            className=" bg-opacity-50 p-3 rounded-full"
            onClick={nextSlide}
          >
            <GoChevronRight className="w-8 h-8 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
