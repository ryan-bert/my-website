import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';

export default function App() {
  return (
    <div className='bg-black pb-[1500px]'>
      <NavBar />
      <Hero />
      <div  className='text-3xl'>
        <h1>Hello, world!</h1>
      </div>
    </div>
  );
}
