export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-3 px-3 bg-transparent text-white">
      <h1 className="w-[600px]">My Site</h1>
      <ul className="flex flex-row space-x-10">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}