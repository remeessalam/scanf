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
                Enhancing Operations with Advanced Technology.
              </h2>
              <p className="desc">
                Welcome to [you company name] —where technology meets innovation to
                drive your success. We specialize in creating powerful digital
                experiences and delivering solutions that simplify complex
                challenges. With a wide range of services from mobile and web
                development to AI and data intelligence, we’re here to help you
                unlock new potential and stay ahead in today’s fast-paced
                digital landscape.
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
          <div data-aos="fade-left" className="relative h-full ">
            <img
              src={aboutUsImg}
              className="absolute top-0 right-0 object-contain max-h-[30rem] rounded-lg sm:max-w-[30rem] mx-auto"
              alt=""
            />
            <img
              src={aboutUsImg2}
              className=" absolute bottom-0 left-0  object-contain max-h-[10rem] rounded-lg sm:max-w-[30rem] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

// why choose us

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-9">
            <div className="flex flex-col gap-5 h-full"></div>
            <div
              data-aos-offset={-400}
              data-aos="fade-up"
              className="w-full lg:block hidden"
            >
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div>
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos-offset={-400}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Effective Communication
                  </h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Clear, transparent, and collaborative communication to ensure
                  alignment and build strong relationships.
                </p>
              </div>
              <div
                data-aos-offset={-400}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Security and Compliance
                  </h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Ensuring robust security measures and adherence to industry
                  standards to protect data, mitigate risks, and maintain
                  compliance. We employ encryption, conduct regular audits, and
                  stay updated with regulations to safeguard sensitive
                  information.
                </p>
              </div>
            </div>
          </div>

///about us

 <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At [you company name], innovation is at the core of everything we
                    do. We continuously embrace emerging technologies and
                    industry trends to craft future-ready solutions that
                    redefine possibilities. Our mission is to deliver solutions
                    that not only address today's challenges but also anticipate
                    and adapt to the demands of tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    At [you company name], we recognize that every business is
                    unique, with its own set of challenges and goals. That’s why
                    we adopt a personalized approach, customizing each project
                    to align seamlessly with your specific requirements. Whether
                    you’re a startup or an established enterprise, we
                    collaborate closely with our clients, fostering long-term
                    partnerships built on trust, transparency, and shared
                    success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    At [you company name], quality and reliability form the
                    foundation of our work. We take pride in crafting
                    world-class digital solutions that are robust, scalable, and
                    secure. Every project undergoes thorough quality assurance,
                    ensuring we consistently exceed expectations and meet the
                    highest industry standards.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    At [you company name], we believe that technology is only as
                    valuable as the purpose it serves. Our mission is to harness
                    the power of technology to create meaningful
                    impacts—streamlining operations, elevating customer
                    experiences, and driving business growth. Our solutions are
                    built to empower businesses, enabling them to scale and lead
                    in their respective industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We provide a comprehensive range of services, ensuring
                    end-to-end support from initial concept to deployment and
                    beyond. At [you company name], our aim is to be your trusted
                    partner throughout your digital journey—whether it's
                    establishing your online presence, streamlining your
                    operations, or delivering engaging experiences for your
                    customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
