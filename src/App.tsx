import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import ProfileCard from './components/profile-card';
import ContactForm from './components/contact-form';
import { WavyBackground } from './components/ui/wavy-background';
import { projectsData } from './data/projectsData';

export default function App() {

  return (
    <>
      <main className='bg-black text-white overflow-hidden pb-10 md:pb-20'>
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
            Hi, I’m Ryan! I’m a Quantitative Developer at Ironclad Asset Management in Johannesburg, where I’ve worked since November 2024. I’m the sole developer of the firm’s data platform, which covers its SQL database, internal API, data pipelines and AI tooling.
          </p>
          <p className="mb-6">
            Before that, I studied at Stellenbosch University. I’ve always been fascinated by the intersection of data, technology and finance, which is what drives my passion for software development and problem-solving.
          </p>
          <p className="mb-6">
            Outside of work I enjoy picking up new skills in both technical and non-technical areas, tinkering with Linux, and reading, which is one of my favourite ways to explore new ideas and perspectives.
          </p>
            </WavyBackground>
          </div>
        </section>
        <section id='contact' className='flex flex-col items-center px-[10%]'>
          <h1 className="my-heading">Contact_me();</h1>
          <div className="flex flex-col lg:flex-row lg:space-x-[15%] items-center">
              <ProfileCard />
              <ContactForm />
          </div>
        </section>
      </main>
    <footer className="p-8 md:p-10 bg-secondary text-white text-center">
      <p className='text-xs'>© {new Date().getFullYear()} My Portfolio | Built with ❤️ by Ryan</p>
    </footer>
    </>
  );
}