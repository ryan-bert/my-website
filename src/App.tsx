import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import ProfileCard from './components/profile-card';
import { FaGithub, FaImdb, FaGoodreads } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <body className='bg-black pb-[1500px] text-white'>
        <NavBar />
        <Hero />
        <section id='projects' className="flex flex-col py-[60px] px-8">
        <h1 className="py-10 text-5xl text-center">
          <span className='font-alpha'>My </span>
          <span className="px-5 py-1 rounded-xl font-source font-semibold bg-tertiary">
            <span className="text-mygreen">projects</span>
            <span className="text-mypink">()</span>
            <span className="text-white">;</span>
          </span>
        </h1>
        <div className="flex flex-col">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        </section>
        <section id='about' className='py-[60px]'>
          <h1 className="text-5xl text-center">
            <span className='font-alpha'>About </span>
            <span className="px-5 py-1 rounded-xl font-source font-semibold bg-tertiary">
            <span className="text-mygreen">me</span>
            <span className="text-mypink">()</span>
            <span className="text-white">;</span>
          </span>
          </h1>
          <ProfileCard />
        </section>
      </body>
      <footer>
        <div className="flex flex-col items-center p-4 bg-secondary text-white text-center">
          <div className="flex space-x-4 mb-2">
            <a href="https://github.com/ryan-bert" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.imdb.com/user/ur58431544/ratings/?sort=top_rated%2Cdesc" target="_blank" rel="noopener noreferrer">
              <FaImdb size={30} />
            </a>
            <a href="https://www.goodreads.com/user/show/155746857-ryan-bertschinger" target="_blank" rel="noopener noreferrer">
              <FaGoodreads size={30} />
            </a>
          </div>
          <p className='text-xs'>© 2021 My Portfolio</p>
        </div>
      </footer>
    </>
  );
}