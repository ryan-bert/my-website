import Tag from "./tag";

export default function ProjectCard() {
  return (
    <div className="flex flex-row h-auto p-7 my-10 mx-40 rounded-xl bg-secondary outline outline-1 outline-gray-600 shadow-[10px_10px_30px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col justify-start pr-4 w-[1200px]">
        <h1 className="text-4xl font-bold pb-4">Card Counting Simulator</h1>
        <img
          src="simulation.png"
          alt="Code"
          className="object-cover rounded-xl max-w-full max-h-60"
        />
      </div>
      <div className="flex flex-col justify-between pl-4 relative">
        <div className="absolute top-0 right-0">
          <div className="flex flex-row space-x-3 font-semibold">
            <Tag  text="Python" color="bg-orange-400"/>
            <Tag  text="pandas" color="bg-red-400"/>
            <Tag  text="numpy" color="bg-green-600"/>
            <Tag  text="Statistics" color="bg-blue-400"/>
            <Tag  text="TensorFlow" color="bg-orange-400"/>
          </div>
        </div>
        <div className="flex-grow mt-20">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            similique doloremque atque et dolor itaque, blanditiis minus debitis
            neque voluptas optio rerum pariatur provident quia asperiores nam
            commodi aperiam corporis.
          </p>
        </div>
        <div className="text-right mt-4">
          <button className="w-fit px-4 py-2 my-button">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}