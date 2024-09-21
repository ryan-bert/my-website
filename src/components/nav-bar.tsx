export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-3 px-2 md:px-5 bg-black text-white font-semibold">
      <a href="/" className="w-auto">My Site</a>
      <ul className="flex flex-row space-x-5 md:space-x-10">
        <li>
          <a href="#projects" className="my-underline">Projects</a>
        </li>
        <li>
          <a href="#about" className="my-underline">About</a>
        </li>
        <li>
          <a href="#contact" className="my-underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
}