import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Card } from "~/components";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-20">
      <aside className="md:lg-[400px] md:lg-[400px] flex w-full flex-col justify-between gap-8 md:gap-0 lg:w-[500px] lg:min-w-[500px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] font-semibold tracking-tighter">
            Get in Touch ✨
          </h2>
          <p className="text-2xl tracking-tighter text-gray-500">
            I’m always open to collaborate on a project or hear about an
            opportunity!
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-tight">WANT TO CALL ME?</p>
            <a
              href="https://calendly.com/david-acevedo-/30min"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] font-medium text-gray-500 hover:text-primary-500 hover:underline"
            >
              Schedule a call with me
            </a>
          </div>
          <div>
            <p className="text-sm tracking-tight">JUST WANT TO EMAIL ME?</p>
            <a
              href="mailto:hello@david-acevedo.com"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] font-medium text-gray-500 hover:text-primary-500 hover:underline"
            >
              hello@david-acevedo.com
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/acevedoposada"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
          >
            <FiGithub size={25} />
          </a>
          <a
            href="https://www.instagram.com/davidchacevedo_/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
          >
            <FiInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
          >
            <FiLinkedin size={25} />
          </a>
        </div>
      </aside>
      <Card className="flex w-full flex-col gap-6 p-6 shadow-2xl">
        <input
          className="rounded-lg bg-sky-100 p-4 focus:outline-none"
          placeholder="Name"
        />
        <input
          className="rounded-lg bg-sky-100 p-4 focus:outline-none"
          placeholder="Email"
        />
        <textarea
          className="min-h-[150px] rounded-lg bg-sky-100 p-4 focus:outline-none"
          placeholder="Type your message"
        ></textarea>
        <button className="w-full rounded-lg bg-primary-500 p-4 font-medium text-white hover:bg-primary-400">
          Send Message
        </button>
      </Card>
    </div>
  );
}
