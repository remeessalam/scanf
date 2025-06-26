import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import image from "../../assets/images/contactimage.jpg";
import { companyDetails } from "../../constant";

const GetInTouch = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSpinner(true);
    const emailBody = `Name: ${data.name}\n\nEmail: ${data.email}\n\nPhone: ${
      data.phone || "Not provided"
    }\n\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;

    const payload = {
      name: companyDetails.name,
      to: companyDetails.email,
      subject: `New message from ${companyDetails.name} Contact Form`,
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      toast.success("Message sent successfully!");
      reset();
      navigate("/thank-you");
    } catch (error) {
      toast.error(error.message || "Failed to send message");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div id="contact" className="pb-[5rem] relative">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="heading text-center text-lg font-medium lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
          <img
            src={image}
            alt="Contact"
            className="max-h-[25rem] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let's connect</p>
          <div className="bg-gradient-to-b text-white from-primary to-primary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your name"
                    autoComplete="off"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your email"
                    autoComplete="off"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="subject" className="block">
                    Subject*
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter subject"
                    autoComplete="off"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block">
                  Message*
                </label>
                <textarea
                  rows="4"
                  className="w-full outline-none p-3 rounded-lg text-black"
                  placeholder="Enter your message here"
                  autoComplete="off"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 bg-white text-black px-5 py-3 rounded-full hover:text-primary hover:-translate-y-1 duration-300 transition-all"
                disabled={spinner}
              >
                {spinner ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
