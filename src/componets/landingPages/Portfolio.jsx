import React, { useState, useEffect } from "react";
import { webPortfolio, appPortfolio } from "../../constant";
import { useKeenSlider } from "keen-slider/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const animation = { duration: 3000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment ? webPortfolio : appPortfolio;

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="portfolio"
      className="text-black py-[2rem] relative"
    >
      <div className="">
        <div className="flex flex-col items-center gap-5 text-black">
          <p className="gradient-text uppercase gradient-rounded-text-box">
            Portfolio
          </p>
          <h2 className="heading-2 text-center my-16">Our Selected Projects</h2>
          <div className="relative w-full">
            <div ref={sliderRef} className="keen-slider">
              {portfolio.map((obj) => (
                <div
                  key={obj.title}
                  className="keen-slider__slide border-4 border-primary/40 rounded-xl bg-custom-gradient"
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full  2xl:max-h-[467px] object-cover"
                  />
                  <div className="px-3 mt-3 pb-5 max-h-[96px]">
                    <h4 className="font-semibold text-xl">{obj.title}</h4>
                    <p className="desc">{obj.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <button
                onClick={() => instanceRef.current?.prev()}
                className="p-2 bg-primary/20 rounded-full"
              >
                <FaArrowLeft />
              </button>
              {/* <span>
                {currentSlide + 1} / {portfolio.length}
              </span> */}
              <button
                onClick={() => instanceRef.current?.next()}
                className="p-2 bg-primary/20 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
