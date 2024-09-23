import Tags from "./tags";

export interface ProjectCardProps {
  title: string;
  img: string;
  tags: string[];
  description: string;
  url: string;
}

export default function ProjectCard({ title, img, tags, description, url }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row h-auto p-4 lg:p-8 mx-[5%] xl:mx-[10%] rounded-3xl bg-secondary outline outline-4 outline-tertiary my-shadow hover:outline-white hover:scale-[1.05] hover:shadow-none transition-all duration-500 ease-in-out overflow-hidden">
      <div className="flex flex-col justify-start lg:mr-4 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold pb-4 lg:whitespace-nowrap">{title}</h1>
        <img
          src={img}
          alt="Project Thumbnail"
          className="object-cover rounded-xl max-w-full max-h-60 lg:max-w-[400px] xl:max-w-[500px] h-auto"
        />
      </div>
      <div className="flex flex-col w-full mt-4 lg:mt-0 lg:pl-4">
        <div className="ml-auto pb-3">
          <Tags text={tags} />
        </div>
        <div className="flex-grow lg:flex lg:items-center overflow-hidden">
          <p className="text-white">
            {description}
          </p>
        </div>
        <div className="ml-auto mt-4 lg:mt-auto">
          <button className="w-fit px-4 py-2 my-button">
            <a href={url} target="_blank" rel="noreferrer">View Code</a>
          </button>
        </div>
      </div>
    </div>
  );
}