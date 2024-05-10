import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MatrixBackground from './components/MatrixBackground';
import Skill from './components/Skill';
import Project from './components/Project';
import Footer from './components/Footer';
import Mymarquee from './components/Mymarquee';

function App() {

  return (
      <div className="App " >
        <section id="home" className=' grid grid-rows-[5rem_1fr_auto] justify-center md:h-[100vh] h-auto overflow-hidden'>
          <MatrixBackground />
          <Header/>
          <Home/>
          <Mymarquee/>
        </section>
        <section id="skills" className='z-10 bg-[#000336] md:px-10 px-4 py-6 grid '>
          <Skill/>
        </section>
        <section id="projects" className="z-10 bg-[#000336] md:px-10 px-4 pt-6 pb-12 grid  ">
          <Project/>
        </section>
        <section id='contact'  className='z-10 '><Footer/></section>
      </div>
  );
}

export default App;
