import React, { useEffect } from "react";
import To_do from "../img/to_do.png";
import JS from "../img/icons8-javascript.svg";
import Tailwind from "../img/icons8-tailwind-css.svg";
import Reacts from "../img/icons8-react.svg";
import Khmer_new_year_post from "../img/khmer_new_year_post.png";
import Cafe_logo from "../img/Cafe_logo.png";
import HRU_logo from "../img/HRU_logo.png";
import Photoshop from "../img/icons8-adobe-photoshop.svg";
import Coreldraw from "../img/icons8-coreldraw.svg";
import Shopifytheme from "../img/project-shopify-theme.png";
import webbuilding from "../img/project-web-building.png";
import Portfolio from "../img/Portfolio.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  const disableAOS = () => {
    AOS.refreshHard(); 
    AOS.refresh();
    document.removeEventListener('scroll', AOS.refresh); 
    AOS.init({ disable: true }); 
    
    let elementss = document.querySelectorAll('.reveal-block'); 
    elementss.forEach((element) => { 
      element.classList.remove('reveal-block'); 
    }); 
  };

  const enableAOS = () => {
    setTimeout(() => {
      AOS.init(); 
    }, 500); 
  };

  useEffect(() => {
    const images = document.querySelectorAll('img');

    const handleImageLoad = () => {
      AOS.refresh();
    };

    images.forEach((img) => {
      img.addEventListener('load', handleImageLoad);
    });
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad); 
      });
    };
  }, []);
  return (
    <div className=" bg-[] grid gap-12 justify-center" >
      <h1 className="text-4xl font-semibold"  data-aos="fade-up-20">Projects</h1>
      <div className="w-[100%] bg-white transition-colors duration-200 ease-in-out max-w-[1280px]   bg-opacity-10 border-2 border-[#625FB8] p-4 md:p-8 rounded-xl grid gap-6" data-aos="fadeUp ">
        <h2 className="text-2xl font-medium text-white text-start" data-aos="fade-up-20">
          Web Development
        </h2>
        <Swiper
          className="text-white flex gap-8 w-[100%] mySwiper max-[768px]:!pb-10"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={disableAOS} 
      onSwiper={(swiper) => console.log(swiper)}
      onTouchEnd={enableAOS} 
        >
          <SwiperSlide className="!grid justify-start gap-[8px]"  data-aos="fade-up-20">
            <img src={To_do} />
            <h3 className="text-xl font-medium  text-start">To-do List</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={JS} alt="" />
              <img src={Tailwind} alt="" />
              <img src={Reacts} alt="" />
            </div>
            <p className="text-start">Responsive for all devices</p>
            <div className="flex justify-start gap-2">
              <a href="https://songhygoingpro.github.io/To-Do-LIst-with-React/" target="blank">
                <button className="w-24 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  View Demo
                </button>
              </a>
              <a href="https://github.com/Songhygoingpro/To-Do-LIst-with-React" target="blank">
                <button className="text-xs rounded-3xl border-2 hover:border-0 w-24 h-10 transition ease-linear duration-200 text-white hover:bg-indigo-600 bg-opacity-0">
                  Github
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20" data-aos-delay="100" >
            <img src={Shopifytheme} />
            <h3 className="text-xl font-medium  text-start">Shopify Theme Store</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src="https://www.svgrepo.com/show/452185/css-3.svg" width="32px" height="32px" alt="" />
              <img src="https://www.svgrepo.com/show/303503/shopify-logo.svg" width="32px" height="32px" alt="" />
              <img src={JS} alt="" />
            </div>
            <p className="text-start">Responsive for all devices</p>
            <div className="flex justify-start gap-2">
              <a href="https://jing-hub-shopping.myshopify.com" target="blank">
                <button className="w-24 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  View Demo
                </button>
              </a>
              <a href="https://github.com/Songhygoingpro/JingHub-Shopify-Store" target="blank">
                <button className="text-xs rounded-3xl border-2 hover:border-0 w-24 h-10 transition ease-linear duration-200 text-white hover:bg-indigo-600 bg-opacity-0 ">
                  Github
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20" data-aos-delay="100" >
            <img src={webbuilding} />
            <h3 className="text-xl font-medium  text-start">Web Development/Design Service</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src="https://www.svgrepo.com/show/452185/css-3.svg" width="32px" height="32px" alt="" />
              <img src={JS} alt="" />
            </div>
            <p className="text-start">Responsive for all devices</p>
            <div className="flex justify-start gap-2">
              <a href="https://web-traffic-generation.vercel.app" target="blank">
                <button className="w-24 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  View Demo
                </button>
              </a>
              <a href="https://github.com/Songhygoingpro/Web-Traffic-Generation" target="blank">
                <button className="text-xs rounded-3xl border-2 hover:border-0 w-24 h-10 transition ease-linear duration-200 text-white hover:bg-indigo-600 bg-opacity-0 ">
                  Github
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[100%] bg-white  transition-colors duration-200 ease-in-out max-w-[1280px]   bg-opacity-10 border-2 border-[#625FB8] md:p-8 p-4 rounded-xl grid gap-6" data-aos="fadeUp">
        <h2 className="text-2xl font-medium text-white text-start"  data-aos="fade-up-20">
          Graphic Design
        </h2>
        <Swiper
          className="text-white !flex !justify-start gap-1 w-[100%] mySwiper  max-[768px]:!pb-10"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={disableAOS} 
      onSwiper={(swiper) => console.log(swiper)}
      onTouchEnd={enableAOS} 
        >
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20">
            <img src={Khmer_new_year_post} />
            <h3 className="text-xl font-medium  text-start">
              Khmer New Year Poster
            </h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={Photoshop} alt="" />
              <img src={Coreldraw} alt="" />
            </div>
            <p className="text-start">
              Poster I made for assignment at
              <br />
              My university.
            </p>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20" data-aos-delay="100">
            <img src={Cafe_logo} />
            <h3 className="text-xl font-medium  text-start">Cafe Logo</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={Coreldraw} alt="" />
            </div>
            <p className="text-start">
              Logo I made for assignment at
              <br />
              My university.
            </p>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20" data-aos-delay="200">
            <img src={HRU_logo} />
            <h3 className="text-xl font-medium  text-start">HRU Logo</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={Coreldraw} alt="" />
            </div>
            <p className="text-start">
              Logo I made for assignment at
              <br />
              My university.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[100%] bg-white  transition-colors duration-200 ease-in-out max-w-[1280px]   bg-opacity-10 border-2 border-[#625FB8] md:p-8 p-4 rounded-xl grid gap-6" data-aos="fadeUp">
        <h2 className="text-2xl font-medium text-white text-start"  data-aos="fade-up-20">
          Figma Design
        </h2>
        <Swiper
          className="text-white flex gap-8 w-[100%] mySwiper max-[768px]:!pb-10"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={disableAOS} 
      onSwiper={(swiper) => console.log(swiper)}
      onTouchEnd={enableAOS} 
        >
          <SwiperSlide className="!grid justify-start gap-[8px]"  data-aos="fade-up-20">
            <img src={Portfolio} className="rounded-md" />
            <h3 className="text-xl font-medium  text-start">
              Portfolio
            </h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src="https://www.svgrepo.com/show/452202/figma.svg" width="32px" height="32px" alt="" />
            </div>
            <p className="text-start">
            Streamlined Design Process Using
              <br />Figma
            </p>
            <a className="justify-self-start" href="https://www.figma.com/file/PyyIFPB7OMUnW5MduIyxrT/Portfolio?type=design&node-id=0%3A1&mode=design&t=ZYIGFwSQ9jd1n0Ay-1" target="blank">
                <button className="w-28 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  See On Figma
                </button>
              </a>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[8px]"  data-aos="fade-up-20" data-aos-delay="100">
            <img src={Shopifytheme} />
            <h3 className="text-xl font-medium  text-start">Shopify Theme Store</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src="https://www.svgrepo.com/show/452202/figma.svg" width="32px" height="32px" alt="" />
            </div>
            <p className="text-start">
            Streamlined Design Process Using
              <br />Figma
            </p>
            <a className="justify-self-start" href="https://www.figma.com/file/F0Vo2FH8TnCpIIHeMHVpHU/Shopify-Theme-Store?type=design&node-id=0%3A1&mode=design&t=RGc57fmUUeqIQtD0-1" target="blank">
                <button className="w-28 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  See On Figma
                </button>
              </a>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[8px]"  data-aos="fade-up-20" data-aos-delay="200">
            <img src={webbuilding} className="max-w-[100%] h-auto " />
            <h3 className="text-xl font-medium  text-start">Web Development/Design Services</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src="https://www.svgrepo.com/show/452202/figma.svg" width="32px" height="32px" alt="" />
            </div>
            <p className="text-start">
            Streamlined Design Process Using
              <br />Figma
            </p>
            <a className="justify-self-start" href="https://www.figma.com/file/Izcx8DatnA0nD9myX5ubeE/Web-Traffic-Generator?type=design&node-id=0%3A1&mode=design&t=XvuJc8dFAfxmQx6I-1" target="blank">
                <button className="w-28 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-white bg-indigo-600 text-xs">
                  See On Figma
                </button>
              </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
