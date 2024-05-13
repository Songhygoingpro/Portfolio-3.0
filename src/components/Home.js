import React, { useEffect } from "react";
import pf from "../img/pf.png";
import Resume from "../img/Resume.pdf";

function Home() {

  return (
    <div className="text-white md:flex grid  justify-center items-center px-4 gap-4  z-0 overflow-hidden w-fit self-center justify-self-center">
      <div className="home-content flex flex-col gap-6 p-4 md:p-8">
        <div class="reveal-holder">
          <div class="reveal-block" data-aos="reveal-right"></div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-sans text-left"
            data-aos="fade-up-20"
            data-aos-delay="700"
          >
            Hello, I'm Songhy<span className="text-indigo-600">.</span>
          </h1>
        </div>
        <div class="reveal-holder">
          <div class="reveal-block" data-aos="reveal-right"></div>
          <h2 className="text-2xl md:text-4xl font-bold  text-left"
           data-aos="fade-up-20"
           data-aos-delay="600">
            I'm a{" "}
            <span className="text-indigo-600">Computer Science student</span>
          </h2>
        </div>
        <div class="reveal-holder">
          <div class="reveal-block" data-aos="reveal-right"></div>
          <h2 className="text-lg md:text-xl font-medium  text-left "
           data-aos="fade-up-20"
           data-aos-delay="600">
            I spend my day focus on <br />
            <span className="underline decoration-sky-600">
              Web Design
            </span> &{" "}
            <span className="underline decoration-sky-600">
              Web Development
            </span>
          </h2>
        </div>
        <div class="reveal-holder">
          <div class="reveal-block" data-aos="reveal-right"></div>
        <div className=" z-50 transition-[scale_0.3s_ease_0.1s] hover:scale-105 flex justify-start w-fit">
          <a
            target="blank"
            href={Resume}
            data-aos="fade-up-20"
            data-aos-delay="600"
            className=" px-6 py-[10px] rounded-full transition-all bg-gradient-to-r from-violet-600 font-medium to-indigo-600"
          >
            Resume
          </a>
        </div>
        </div>
      </div>
      <div className="flex justify-center">
      <div class="reveal-holder">
          <div class="reveal-block" data-aos="reveal-right"></div>
        <img
           data-aos="fade-up-20"
           data-aos-delay="600"
          src={pf}
          className="w-auto object-cover h-fit"
          alt="Profile"
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
