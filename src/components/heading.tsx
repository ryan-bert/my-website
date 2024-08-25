import { SparklesCore } from "./ui/sparkles";

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
      <h1 className="my-[150px] text-7xl font-source font-bold text-center text-white relative z-10">
        {text}
      </h1>
  );
}