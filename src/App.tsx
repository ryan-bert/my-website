import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import ProfileCard from './components/profile-card';
import { FaGithub, FaImdb, FaGoodreads, FaLinkedin } from 'react-icons/fa';
import { SparklesCore } from './components/ui/sparkles';
import Heading from './components/heading';

export default function App() {
  return (
    <>
      <body className='bg-black pb-[1500px] text-white'>
        <NavBar />
        <Hero />
        <section id='projects' className="flex flex-col py-[60px] px-8">
          <div className="relative flex flex-col items-center">
            <Heading text="My Projects" />
          </div>
          <div className="flex flex-col space-y-20 bg-transparent mx-[15%]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section id='about' className='py-[60px]'>
          <Heading text="About Me" />
          <div className="flex flex-row mx-40 my-20">
            <div className="flex w-1/2">
              <ProfileCard />
            </div>
            <div className="pl-10">
              <p>Lorem ipsum dolor sit...</p>
            </div>
          </div>
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
            <a href="https://www.linkedin.com/in/ryan-bertschinger-458035211/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
          <p className='text-xs'>© 2024 My Portfolio</p>
        </div>
      </footer>
    </>
  );
}