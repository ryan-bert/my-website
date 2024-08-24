export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-3 px-3 bg-transparent text-white font-alphas">
      <h1 className="w-[600px]">My Site</h1>
      <ul className="flex flex-row space-x-10">
        <li>
          <a href="#projects" className="relative after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="relative after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="relative after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}