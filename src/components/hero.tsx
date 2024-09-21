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
    <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <Vortex
        backgroundColor="black"
        rangeY={500}
        particleCount={1500}
        baseHue={0}
        className="flex flex-col justify-center w-full h-full items-center md:items-start md:pl-[10%] lg:pl-[15%]"
      >
        <div className="flex-col">
          <h2 className="text-white text-5xl md:text-7xl font-bold">
            <div>Need a Software</div>
            <div>Engineer?</div>
          </h2>
          <div className="flex flex-row gap-4 mt-6 items-center">
            <p>Say less,</p>
            <button className="px-4 py-2 my-button">
              <a href="#contact">Contact me</a>
            </button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}