import Tag from "./tag";

export default function ProjectCard() {
  return (
    <div
      className="flex flex-row h-[300px] px-4 my-10 mx-40 rounded-xl bg-secondary outline outline-1 outline-gray-600 shadow-[15px_15px_30px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex flex-col h-full">
        <h1 className="text-3xl pb-2">Card Counting Simulator</h1>
        <img
          src="simulation.png"
          alt="Code"
          className="max-h-[80%] object-contain rounded-xl"
        />
      </div>
      <div className="flex flex-col h-full w-1/2">
        <div className="text-right">
          <Tag />
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates similique doloremque atque et dolor itaque, blanditiis minus debitis neque voluptas optio rerum pariatur provident quia asperiores nam commodi aperiam corporis.</p>
        <div className="text-right">
          <button className="w-fit p-2 my-button">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}