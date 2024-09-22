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
      <body className='bg-black text-white overflow-hidden pb-10 md:pb-20'>
        <NavBar />
        <Hero />
        <section id='projects' className="flex flex-col my-20 md:my-40">
          <div className="relative flex flex-col items-center">
            <h1 className="my-heading">my_projects();</h1>
          </div>
          <div className="flex flex-col space-y-20 bg-transparent">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section id='about' className='mb-10 md:mb-20'>
          <div className="relative text-lg">
            <WavyBackground className="py-20 max-w-[90%] lg:max-w-[75%] xl:max-w-[65%]">
          <h1 className="my-heading">about_me();</h1>
          <p className="mb-6">
            Hi, I’m Ryan! I’m a final-year student at Stellenbosch University, majoring in Financial Risk Management and Computer Science. I’ve always been fascinated by the intersection of data, technology, and finance, which has driven my passion for software development and problem-solving.
          </p>
          <p className="mb-6">
            My journey started with actuarial science, where I developed a strong foundation in data-driven decision-making, before shifting to computer science to pursue my love for software engineering and machine learning. Along the way, I’ve worked on a variety of projects, from building full-stack web applications to participating in AI-driven hackathons, always eager to explore new technologies.
          </p>
          <p className="mb-6">
            Outside of coding, I’ve got a thing for data—whether it's analyzing portfolio strategies, rating movies on IMDb, or logging personal metrics. I’m also into Linux, Raspberry Pi projects, and staying up to date with the latest tech trends.
          </p>
          <p className="mb-6">
            I’m passionate about continuous learning, and I enjoy picking up new skills in both technical and non-technical areas. I’m also an avid reader, which has helped me not only broaden my knowledge but also become a better communicator. I’m excited to keep growing, and I look forward to contributing to projects that challenge and inspire me.
          </p>
            </WavyBackground>
          </div>
        </section>
        <section id='contact' className='flex flex-col items-center'>
          <h1 className="my-heading">Contact_me();</h1>
          <div className="flex flex-col lg:flex-row items-center">
              <ProfileCard />
              <ContactForm />
          </div>
        </section>
      </body>
    <footer className="p-8 md:p-10 bg-secondary text-white text-center">
      <p className='text-xs'>© 2024 My Portfolio | Built with ❤️ by Ryan</p>
    </footer>
    </>
  );
}