export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-3 px-3 bg-transparent text-white">
      <h1 className="w-[600px]">My Site</h1>
      <ul className="flex flex-row space-x-4">
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}