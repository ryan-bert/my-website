export default function ProjectCard() {
  return (
    <div className="flex flex-row h-[300px] px-4 pt-4 rounded-xl bg-gray-600">
      {/* Column container with height matching the row */}
      <div className="flex flex-col h-full">
        <h1 className="text-4xl">Card Counting Simulator</h1>
        {/* Image with max height set */}
        <img src="code.png" alt="Code" className="max-h-full object-contain" />
      </div>
      <div className="flex flex-col h-full w-1/2">
        <p className=" text-right">Python</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates similique doloremque atque et dolor itaque, blanditiis minus debitis neque voluptas optio rerum pariatur provident quia asperiores nam commodi aperiam corporis.</p>
        <button className="w-24 mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2">
          View Project
        </button>
      </div>
    </div>
  );
}