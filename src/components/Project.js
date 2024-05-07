import React, { useEffect } from "react";
import To_do from "../img/to_do.png";
import JS from "../img/icons8-javascript.svg";
import Tailwind from "../img/icons8-tailwind-css.svg";
import Reacts from "../img/icons8-react.svg";
import E_commerce from "../img/project-e-commerce.png";
import Khmer_new_year_post from "../img/khmer_new_year_post.png";
import Cafe_logo from "../img/Cafe_logo.png";
import HRU_logo from "../img/HRU_logo.png";
import Photoshop from "../img/icons8-adobe-photoshop.svg";
import Coreldraw from "../img/icons8-coreldraw.svg";
import Shopifytheme from "../img/project-shopify-theme.png";
import webbuilding from "../img/project-web-building.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

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
    <div className=" bg-[] grid gap-12" >
      <h1 className="text-4xl font-semibold"  data-aos="fade-up-20">Projects</h1>
      <div className="w-[100%] bg-[#D9D9D9] p-4 md:p-8 rounded-xl grid gap-6">
        <h2 className="text-3xl font-medium text-black text-start" data-aos="fade-up-20">
          Web Development
        </h2>
        <Swiper
          className="text-black flex gap-8 w-[100%] mySwiper"
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
            <h3 className="text-2xl font-medium  text-start">To-do List</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={JS} alt="" />
              <img src={Tailwind} alt="" />
              <img src={Reacts} alt="" />
            </div>
            <p className="text-start">Responsive for all devices</p>
            <div className="flex justify-start gap-2">
              <a href="">
                <button className="w-24 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-[#D9D9D9] hover:border-2 hover:border-[#383838] bg-[#383838] text-xs">
                  View Demo
                </button>
              </a>
              <a href="">
                <button className="text-xs rounded-3xl border-2 w-24 h-10 hover:bg-[#383838] transition ease-linear duration-200 hover:text-white border-[#383838] ">
                  Github
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!grid justify-start gap-[6px]"  data-aos="fade-up-20" data-aos-delay="100" >
            <img src={E_commerce} />
            <h3 className="text-2xl font-medium  text-start">E-commerce</h3>
            <div className="flex gap-2 items-center">
              <p>Made with:</p>
              <img src={JS} alt="" />
              <img src={Tailwind} alt="" />
              <img src={Reacts} alt="" />
            </div>
            <p className="text-start">Responsive for all devices</p>
            <div className="flex justify-start gap-2">
              <a href="">
                <button className="w-24 h-10 text-white  transition ease-linear duration-200 rounded-3xl hover:text-[#383838] hover:bg-[#D9D9D9] hover:border-2 hover:border-[#383838] bg-[#383838] text-xs">
                  View Demo
                </button>
              </a>
              <a href="">
                <button className="text-xs rounded-3xl border-2 w-24 h-10 hover:bg-[#383838] transition ease-linear duration-200 hover:text-white border-[#383838] ">
                  Github
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" bg-[#D9D9D9] md:p-8 p-4 rounded-xl grid gap-6">
        <h2 className="text-3xl font-medium text-black text-start"  data-aos="fade-up-20">
          Graphic Design
        </h2>
        <Swiper
          className="text-black flex gap-8 w-[100%] mySwiper "
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
            <h3 className="text-2xl font-medium  text-start">
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
            <h3 className="text-2xl font-medium  text-start">Cafe Logo</h3>
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
            <h3 className="text-2xl font-medium  text-start">HRU Logo</h3>
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
      <div className="w-[100%] bg-[#D9D9D9] md:p-8 p-4 rounded-xl grid gap-6">
        <h2 className="text-3xl font-medium text-black text-start"  data-aos="fade-up-20">
          Figma Design
        </h2>
        <Swiper
          className="text-black flex gap-8 w-[100%] mySwiper"
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
            <img src={E_commerce} />
            <h3 className="text-2xl font-medium  text-start">
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
            <img src={Shopifytheme} />
            <h3 className="text-2xl font-medium  text-start">Cafe Logo</h3>
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
            <img src={webbuilding} className="max-w-[100%] h-auto " />
            <h3 className="text-2xl font-medium  text-start">HRU Logo</h3>
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
    </div>
  );
}

export default Project;
