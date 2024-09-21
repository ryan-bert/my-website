import { useEffect } from "react";
import { Vortex } from "./ui/vortex";

export default function Hero() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <Vortex
        backgroundColor="black"
        rangeY={500}
        particleCount={1500}
        baseHue={0}
        className="flex flex-col justify-center px-2 md:px-[10%] py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-7xl font-bold text-center">
          <div>Need a Software</div>
          <div>Engineer?</div>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <p className="text-white text-sm md:text-2xl text-center">
            Say less,
          </p>
          <button className="px-4 py-2 my-button">Contact me</button>
        </div>
      </Vortex>
    </div>
  );
}