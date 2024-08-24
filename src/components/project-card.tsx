import Tag from "./tag";

export default function ProjectCard() {
  return (
    <div className="flex flex-row h-auto px-4 py-6 my-10 mx-40 rounded-xl bg-secondary outline outline-1 outline-gray-600 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Left Column: Heading and Image */}
      <div className="flex flex-col justify-start w-1/3 pr-4">
        <h1 className="text-3xl pb-4">Card Counting Simulator</h1>
        <img
          src="simulation.png"
          alt="Code"
          className="object-cover rounded-xl max-w-full max-h-60"
        />
      </div>

      {/* Right Column: Tags, Description, and Button */}
      <div className="flex flex-col justify-between w-2/3 pl-4 relative">
        {/* Tags in the top right */}
        <div className="absolute top-0 right-0">
          <div className="flex flex-row space-x-3 ">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>

        {/* Description Text */}
        <div className="flex-grow mt-20">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            similique doloremque atque et dolor itaque, blanditiis minus debitis
            neque voluptas optio rerum pariatur provident quia asperiores nam
            commodi aperiam corporis.
          </p>
        </div>

        {/* Button in the bottom right */}
        <div className="text-right mt-4">
          <button className="w-fit px-4 py-2 my-button">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}