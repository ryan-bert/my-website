import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';

export default function App() {
  return (
    <div className='bg-black pb-[1500px] text-white'>
      <NavBar />
      <Hero />
      <section className="flex flex-col pt-[60px] px-8">
        <ProjectCard />
      </section>
    </div>
  );
}
