import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .sendForm(
        "service_yqx6t8s",
        "template_e0drcpc",
        form.current,
        "_D8-Zzcad-BmexpHC"
      )
      .then(
        (result) => {
          console.log(result);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <>
      <section className="bg-dark_primary text-white" id="contact">
        <Toaster />
        <div className="md:container px-5 py-14">
          <h2 className="title !text-white" data-aos="fade-down">
            {Contact.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Contact.subtitle}
          </h4>
          <br />
          <div className="flex gap-10 md:flex-row flex-col">
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-up"
              className="flex-1 flex flex-col gap-5"
            >
              {/* Input Name as same as email js templates values */}
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="border border-slate-600 p-3 rounded"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Id"
                required
                className="border border-slate-600 p-3 rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border border-slate-600 p-3 rounded h-44"
                required
              ></textarea>
              <button
                className="btn self-start
            bg-white text-dark_primary"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="flex-1 flex flex-col gap-5">
              {Contact.social_media.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2"
                >
                  <h4 className="text-white">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
