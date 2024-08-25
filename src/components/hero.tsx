import { Vortex } from "./ui/vortex";

export default function Hero() {
  return (
    <div className="mx-auto rounded-md  h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={500}
        particleCount={2000}
        baseHue={20}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Need a Software Engineer?
        </h2>
        <div className="flex flex-row items-center justify-center gap-3 mt-6">
          <p className="text-white text-sm md:text-2xl text-center">
            Say less,
          </p>
          <button className="px-4 py-2 my-button">Contact me</button>
        </div>
      </Vortex>
    </div>
  );
}