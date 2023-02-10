import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t border-neutral-400">
      <div className="flex flex-col justify-center space-y-4 py-10">
        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Made by Mateus Sousa
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          © {new Date().getFullYear()}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/matews-sousa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-400"
        >
          <DiGithubBadge className="h-12 w-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateus-damiano/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-400"
        >
          <FaLinkedinIn className="h-10 w-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
