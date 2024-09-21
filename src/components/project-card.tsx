import Tags from "./tags";

export interface ProjectCardProps {
  title: string;
  img: string;
  tags: string[];
  description: string;
  url: string;
}

export default function ProjectCard({title, img, tags, description, url}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row h-auto p-4 md:p-8 mx-[5%] xl:mx-[10%] rounded-3xl bg-secondary outline outline-4 outline-tertiary my-shadow hover:outline-white hover:scale-[1.05] hover:shadow-none transition-all duration-500 ease-in-out">
      <div className="flex flex-col justify-start mr-4">
        <h1 className="text-4xl font-bold pb-4 md:whitespace-nowrap">{title}</h1>
        <img
          src={img}
          alt="Project Image"
          className="object-cover rounded-xl max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col pl-4 w-full space-y-6">
        <div className="ml-auto overflow-hidden pt-4 md:pt-0">
          <Tags text={tags} />
        </div>
        <div className="flex-grow overflow-wrap break-words">
          <p className="text-white">
            {description}
          </p>
        </div>
        <div className="ml-auto mt-4">
          <button className="w-fit px-4 py-2 my-button">
            <a href={url} target="_blank">View Project</a>
          </button>
        </div>
      </div>
    </div>
  );
}