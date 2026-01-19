import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="relative p-3.5 mt-10 border-t gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] text-sm">
      <div className="grid">
        &copy;{year}
        <span className="text-2xl">Recipe Buddy</span>
      </div>
      <div className="absolute right-5 bottom-3.5 flex items-center gap-2">
        <a
          href="https://www.github.com/larrywebdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/lawrence-omozojie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:lawrenceomozojie@gmail.com">
          <IoMail size={25} />
        </a>
      </div>
    </footer>
  );
}
