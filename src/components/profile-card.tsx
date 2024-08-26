export default function ProfileCard() {
  return (
    <div className="flex flex-col p-8 items-center w-[400px] rounded-3xl bg-secondary my-shadow outline outline-4 outline-tertiary my-shadow hover:outline-white hover:scale-[1.05] hover:shadow-none transition-all duration-500 ease-in-out">
      <div className="pb-8 flex-shrink">
          <img src="me.jpg" alt="Display Photo" />
      </div>
      <h2 className="font-alpha text-3xl">Ryan Bertschinger</h2>
    </div>
  );
}