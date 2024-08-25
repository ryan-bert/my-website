export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-3 px-5 bg-transparent text-white font-semibold">
      <h1 className="w-[600px]">My Site</h1>
      <ul className="flex flex-row space-x-10">
        <li>
          <a href="#projects" className="my-underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="my-underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="my-underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}