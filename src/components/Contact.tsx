import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      console.log(data);

      toast.success("Message successfully sent");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
        Contact
      </h2>
      <p className="mb-8 font-semibold text-gray-600 dark:text-gray-400">
        Send me a message and I'll get back to you as soon as possible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="mb-6 flex space-x-6 md:m-0 md:block md:space-x-0 md:space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-500">
              Email
            </p>
            <a
              href="mailto:mateussdamiano@gmail.com"
              className="text-sm font-medium text-gray-800 dark:text-white"
            >
              mateussdamiano@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-500">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/mateus-damiano/"
              className="text-sm font-medium text-gray-800 dark:text-white"
            >
              Mateus Sousa
            </a>
          </div>
        </div>
        <form
          className="col-span-2 grid grid-cols-2 gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col space-y-1">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
              placeholder="Your message..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="col-span-2 ml-auto flex items-center gap-1 rounded-md bg-blue-600 py-2 px-4 font-semibold text-white hover:bg-blue-700">
            <span>Send</span>
            <BsArrowRightShort className="h-6 w-6" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
