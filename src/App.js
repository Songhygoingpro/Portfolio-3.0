import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MatrixBackground from './components/MatrixBackground';
import Skill from './components/Skill';
import Project from './components/Project';
import Footer from './components/Footer';
import Mymarquee from './components/Mymarquee';
import Resume from './img/Resume.pdf';

function App() {

  return (
      <div className="App " >
        <section id="home" className=' grid gap-8 md:grid-rows-[5rem_1fr_auto] justify-center md:h-[100vh] h-auto overflow-hidden'>
          <MatrixBackground />
          <Header/>
          <div className='md:block hidden z-50 absolute top-8 2xl:top-16 transition-[scale_0.3s_ease_0.1s] hover:scale-105  right-20'>
    <a target='blank' href={Resume}  className='bg-[#04001E] px-6 py-[10px] rounded-full border-2 transition-all hover:bg-gradient-to-r hover:from-violet-600 font-medium hover:to-indigo-600 border-indigo-600'>
        Resume
    </a>
</div>
          <Home/>
          <Mymarquee/>
        </section>
        <section id="skills" className='z-10 bg-[#000336] justify-center md:px-10 px-4 py-6 grid '>
          <Skill/>
        </section>
        <section id="projects" className="z-10 bg-[#000336] justify-center md:px-10 px-4 pt-6 pb-12 grid  ">
          <Project/>
        </section>
        <section id='contact'  className='z-10 '><Footer/></section>
      </div>
  );
}

export default App;
