import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Your <span className="text-primary">AI</span> Partner in
              Transformative Digital Solutions
            </h1>
            <p className="desc">
              At [you company name], we craft cutting-edge AI-driven IT
              solutions tailored to meet the evolving needs of businesses,
              ensuring enhanced efficiency, sustainable growth, and continuous
              innovation through intelligent automation and data-driven
              insights.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Enhancing Operations with Advanced AI Technology
              </h2>
              <p className="desc">
                Welcome to [you company name] —where technology meets innovation
                to drive your success. We specialize in creating powerful
                digital experiences and delivering solutions that simplify
                complex challenges. With a wide range of services from mobile
                and web development to AI and data intelligence, we’re here to
                help you unlock new potential and stay ahead in today’s
                fast-paced digital landscape.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section
        // data-aos-offset={-400}
        // data-aos-anchor-placement="top-bottom"
        // data-aos-anchor="selector"
        className="py-[3rem] bg-[#333333] text-white"
      >
        <div
          data-aos-offset={-400}
          // data-aos-anchor-placement="bottom-center"
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#7186FF] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Dependable AI-Powered IT Support Tailored for Your Business{" "}
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At [you company name], we understand that your website is more than
            just an online presence—it's the cornerstone of your brand, a
            powerful business tool, and often the first point of interaction
            with potential customers. In today’s fast-paced world, first
            impressions matter, and having a website that is not only
            well-designed but also powered by advanced AI-driven features is
            crucial for success. Our website development services go beyond the
            basics, incorporating AI-powered optimization for performance,
            personalized user experiences, and data-driven insights to drive
            engagement, increase conversions, and accelerate your business
            growth.
          </p>
        </div>
      </section>
      <CommonProject />
      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
