import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">Ready to Elevate Your Business with AI?</h2>
        <p className="desc max-w-[40rem] text-center">
          Our mission is to provide AI-driven solutions that grow with you.
          Discover how our innovative services can empower your business to
          reach new heights—let’s connect and start building a smarter, more
          successful future together!
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
