import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import ProfileCard from './components/profile-card';
import { FaGithub, FaImdb, FaGoodreads, FaLinkedin} from 'react-icons/fa';

export default function App() {
  return (
    <>
      <body className='bg-black pb-[1500px] text-white'>
        <NavBar />
        <Hero />
        <section id='projects' className="flex flex-col py-[60px] px-8">
        <h1 className="py-10 text-5xl text-center">
          <span className="px-5 py-1 rounded-xl font-source font-semibold bg-tertiary">
            <span className=''>my </span>
            <span className="text-mygreen">projects</span>
            <span className="text-mypink">()</span>
            <span className="text-white">;</span>
          </span>
        </h1>
        <div className="flex flex-col bg-transparent px-40 space-y-20">
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
          <h1 className="py-10 text-5xl text-center">
            <span className="px-5 py-1 rounded-xl font-source font-semibold bg-tertiary">
              <span className=''>about </span>
              <span className="text-mygreen">me</span>
              <span className="text-mypink">()</span>
              <span className="text-white">;</span>
            </span>
          </h1>
          <div className="flex flex-row mx-40 my-20">
            <div className="flex w-1/2">
              <ProfileCard />
            </div>
            <div className="pl-10">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas perferendis dolorem quia provident dolor! Optio, aliquam, nulla non quod laboriosam quo iste tempore dolorem, iure perspiciatis assumenda amet cupiditate porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus laboriosam doloribus. Placeat, eius est laborum officiis explicabo maiores dicta doloremque, consectetur nisi ducimus in rem repellat veniam nam aliquid? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quidem ab sunt laboriosam explicabo cupiditate, labore est sapiente in iure culpa cumque. Sequi voluptas cum atque eos veritatis expedita quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione. Fugiat aut minima nesciunt, maxime eos explicabo accusamus ab voluptas tenetur, eveniet pariatur? Similique optio rem voluptatum repudiandae, aliquam in!</p>
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