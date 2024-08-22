import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';

export default function App() {
  return (
    <>
    <body className='bg-black pb-[1500px] text-white'>
      <NavBar />
      <Hero />
      <section className="flex flex-col pt-[60px] px-8">
        <h1 className="text-5xl">My Projects</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </body>
    <footer>
      <div className=" flex flex-row p-4 bg-secondary text-white text-center">
        <p>© 2021 My Portfolio</p>
        <a href=""></a>
      </div>
    </footer>
    </>
  );
}
