import React, { useState, useEffect } from "react";
import { webPortfolio, appPortfolio } from "../../constant";
import { useKeenSlider } from "keen-slider/react";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const animation = { duration: 3000, easing: (t) => t };

const CommonProject = () => {
  const [currentWebSlide, setCurrentWebSlide] = useState(0);
  const [currentAppSlide, setCurrentAppSlide] = useState(0);

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
      setCurrentWebSlide(slider.track.details.rel);
    },
  });

  const [sliderRef2, instanceRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
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
          perView: 2,
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
      setCurrentAppSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const webTimer = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    const appTimer = setInterval(() => {
      if (instanceRef2.current) {
        instanceRef2.current.next();
      }
    }, 3000);

    return () => {
      clearInterval(webTimer);
      clearInterval(appTimer);
    };
  }, []);

  return (
    <div className="my-[5rem]">
      <div className="">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Portfolio
          </div>
          <h3 className="heading-2 text-center my-16">Web Projects</h3>
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {webPortfolio.map((obj) => (
                <div
                  key={obj.id}
                  className="keen-slider__slide border-4 border-primary/40 rounded-xl bg-custom-gradient object-cover"
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full  2xl:max-h-[467px] object-cover"
                  />
                  <div className="px-3 mt-3 pb-5">
                    <h4 className="font-semibold text-xl text-center">
                      {obj.title}
                    </h4>
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
                {currentWebSlide + 1} / {webPortfolio.length}
              </span> */}
              <button
                onClick={() => instanceRef.current?.next()}
                className="p-2 bg-primary/20 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <h3 className="heading-2 text-center my-16">App Projects</h3>
          <div className="relative">
            <div ref={sliderRef2} className="keen-slider">
              {appPortfolio.map((obj) => (
                <div
                  key={obj.id}
                  className="keen-slider__slide border-4 border-primary/40 rounded-xl bg-custom-gradient "
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full  2xl:max-h-[467px] object-cover"
                  />
                  <div className="px-3 mt-3 pb-5">
                    <h4 className="font-semibold text-xl text-center">
                      {obj.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <button
                onClick={() => instanceRef2.current?.prev()}
                className="p-2 bg-primary/20 rounded-full"
              >
                <FaArrowLeft />
              </button>
              {/* <span>
                {currentAppSlide + 1} / {appPortfolio.length}
              </span> */}
              <button
                onClick={() => instanceRef2.current?.next()}
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

export default CommonProject;
