import Tags from "./tags";

interface ProjectCardProps {
  title: string;
  img: string;
  tags: string[];
  description: string;
  url: string;
}

export default function ProjectCard({title, img, tags, description, url}: ProjectCardProps) {
  return (
    <div className="flex flex-row h-auto p-7 z-50 rounded-3xl bg-secondary outline outline-4 outline-tertiary my-shadow hover:outline-white hover:scale-[1.05] hover:shadow-none transition-all duration-500 ease-in-out">
      <div className="flex flex-col justify-start mr-4">
        <h1 className="text-4xl font-bold pb-4 whitespace-nowrap">{title}</h1>
        <img
          src={img}
          alt="Code"
          className="object-cover rounded-xl max-w-full max-h-60"
        />
      </div>
      <div className="flex flex-col pl-4 w-full space-y-12">
        <div className="ml-auto">
          {/* ADD TAGS */}
          <Tags text={tags} />
        </div>
        <div className="flex-grow">
          <p className="text-white">
            {description}
          </p>
        </div>
        <div className="ml-auto mt-4">
          <button className="w-fit px-4 py-2 my-button">
            <a href={url}>View Project</a>
          </button>
        </div>
      </div>
    </div>
  );
}