import { FaGithub, FaImdb, FaGoodreads, FaLinkedin } from 'react-icons/fa';

export default function ProfileCard() {
  return (
    <div className="flex flex-col p-6 items-center md:w-[400px] xl:w-[500px] rounded-3xl bg-secondary my-shadow outline outline-4 outline-tertiary my-shadow">
      <h2 className="text-4xl xl:text-5xl font-extrabold text-nowrap">Ryan Bertschinger</h2>
      <div className="py-5 flex-shrink">
          <img src="me.jpg" alt="Headshot" />
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/ryan-bert" target="_blank" rel="noopener noreferrer" className='hover:scale-[1.3] transition-all duration-500 ease-in-out'>
          <FaGithub size={30} />
        </a>
        <a href="https://www.imdb.com/user/ur58431544/ratings/?sort=top_rated%2Cdesc" target="_blank" rel="noopener noreferrer" className='hover:scale-[1.3] transition-all duration-500 ease-in-out'>
          <FaImdb size={30} />
        </a>
        <a href="https://www.goodreads.com/user/show/155746857-ryan-bertschinger" target="_blank" rel="noopener noreferrer" className='hover:scale-[1.3] transition-all duration-500 ease-in-out'>
          <FaGoodreads size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ryan-bertschinger-458035211/" target="_blank" rel="noopener noreferrer" className='hover:scale-[1.3] transition-all duration-500 ease-in-out'>
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}