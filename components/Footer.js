import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="p-3.5 mt-10 border-t grid justify-center justify-items-center gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] text-sm">
      &copy;{year}
      <div className="flex items-center gap-2">
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
