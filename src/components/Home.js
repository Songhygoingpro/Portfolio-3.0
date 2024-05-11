import React from 'react';
import pf from "../img/pf.png";

function Home() {

  return (
    <div className="text-white md:flex grid  justify-center items-center px-4 gap-4  z-0 overflow-hidden w-fit self-center justify-self-center" >
  <div className="home-content flex flex-col gap-4 p-4 md:p-8" data-aos="fade-up-20">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-sans text-left">
      Hello, I'm Songhy<span className="text-indigo-600">.</span>
    </h1>   
    <h2 className="text-2xl md:text-4xl font-bold  text-left">I'm a <span className="text-indigo-600">Computer Science student</span></h2>
    <h2 className="text-lg md:text-xl font-medium  text-left ">
      I spend my day focus on <br />
     <span className='underline decoration-sky-600'>Web Design</span> & <span className='underline decoration-sky-600'>Web Development</span>
    </h2>
    <div className="flex gap-2">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hover:fill-indigo-600"
          width="2.5rem"
          height="2.5rem"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
        >
          <title>github</title>
          <rect width="24" height="24" fill="none" />
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hover:fill-indigo-600"
          fill="#FFFFFF"
          width="2.5rem"
          height="2.5rem"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
        </svg>
      </a>
    </div>
  </div>
  <div className="flex justify-center">
  <img data-aos="fade-up-20" src={pf} className="w-auto object-cover h-fit" alt="Profile" /></div>
</div>

  );
}

export default Home;
