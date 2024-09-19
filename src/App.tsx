import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import ProfileCard from './components/profile-card';
import ContactForm from './components/contact-form';
import { WavyBackground } from './components/ui/wavy-background';
import { FaGithub, FaImdb, FaGoodreads, FaLinkedin } from 'react-icons/fa';
import { projectsData } from './data/projectsData';

export default function App() {

  return (
    <>
      <body className='bg-black pb-[1500px] text-white'>
        <NavBar />
        <Hero />
        <section id='projects' className="flex flex-col py-[60px] px-8">
          <div className="relative flex flex-col items-center">
            <h1 className="my-heading">my_projects();</h1>
          </div>
          <div className="flex flex-col space-y-20 bg-transparent mx-[15%]">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section id='about' className='relative my-[60px]'>
          <div className="relative my-20 text-lg">
            <WavyBackground className="max-w-4xl py-20">
          <h1 className="my-heading">about_me();</h1>
              <p>
                Hi, I’m Ryan! I’m a final-year student at Stellenbosch University, majoring in Financial Risk Management and Computer Science. I’ve always been fascinated by the intersection of data, technology, and finance, which has driven my passion for software development and problem-solving.
              </p>
              <p>
                My journey started with actuarial science, where I developed a strong foundation in data-driven decision-making, before shifting to computer science to pursue my love for software engineering and machine learning. Along the way, I’ve worked on a variety of projects, from building full-stack web applications to participating in AI-driven hackathons, always eager to explore new technologies.
              </p>
              <p>
                Outside of coding, I have a long-time obsession with data in all forms—whether it's analyzing portfolio strategies, rating movies on IMDb, or logging my daily cold showers. My curiosity doesn’t stop at software: I’m also a fan of Linux, Raspberry Pi projects, and learning as much as I can about the latest in tech.
              </p>
              <p>
                I’m passionate about continuous learning, which fuels both my technical expertise and my social nature. I’ve read over 70 books, improving not just my knowledge but also my communication skills, helping me connect with people and explain complex concepts easily. I’m excited to keep growing, both personally and professionally, and I look forward to contributing to projects that challenge and inspire me.
              </p>
            </WavyBackground>
          </div>
        </section>
        <section id='contact' className='my-20'>
          <h1 className="my-heading">Contact_me();</h1>
          <div className="flex flex-col items-center lg:flex-row mx-40">
            <div className="w-full md:w-1/2">
              <ProfileCard />
            </div>
            <div className="w-full md:w-1/2">
              <ContactForm />
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