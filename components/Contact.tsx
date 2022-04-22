import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <SectionContainer id="contact" title="contact">
      <div className="grid grid-cols-1">
        <div className="text-sm">
          <p>
            Contact to hire me or see if we can build something amazing
            together. I'd love to hear from you!
          </p>
          <p className="my-4">
            Fill in your info in the form below, so I'll try to reply as fast as
            possible.
          </p>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-sm bg-neutral-800 p-1 focus:bg-neutral-700"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="rounded-sm bg-neutral-800 p-1 focus:bg-neutral-700"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="rounded-sm bg-neutral-800 p-1 focus:bg-neutral-700"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="button ml-auto">
              Send <FiSend />
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
