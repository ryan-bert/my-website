export default function ProjectCard() {
  return (
    <div className="pt-12">
      <div className="flex flex-row h-[300px] px-4 pt-4 rounded-xl bg-secondary outline outline-1 outline-gray-600 shadow-[5px_7px_10px_rgba(255,255,255,0.3)]">
        {/* Column container with height matching the row */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl pb-2">Card Counting Simulator</h1>
          {/* Image with max height set */}
          <img src="simulation.png" alt="Code" className="max-h-[80%] object-contain rounded-xl" />
        </div>
        <div className="flex flex-col h-full w-1/2">
          <p className=" text-right">Python</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates similique doloremque atque et dolor itaque, blanditiis minus debitis neque voluptas optio rerum pariatur provident quia asperiores nam commodi aperiam corporis.</p>
          <div className="text-right">
            <button className="w-fit p-2 bg-white text-black font-semibold rounded-lg">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}