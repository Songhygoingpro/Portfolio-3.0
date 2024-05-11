import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'swiper/css';
import 'swiper/css/pagination';
import vector from '../img/vector.png';
import web_dev from '../img/web-development.png';
import ux_design from '../img/user-experience.png';

export default () => {
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
    <div className="grid grid-rows-[5rem_1fr] gap-4 font-medium skill" >
    <div className="flex justify-center items-center">
      <h2 className="text-4xl font-semibold" data-aos="fade-up-20" data-aos-offset="130">Skills</h2>
    </div>
    <Swiper className='grid grid-cols-3 w-[100%] z-10 !pb-10'
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
      }}
      onSlideChange={disableAOS} 
      onSwiper={(swiper) => console.log(swiper)}
      onTouchEnd={enableAOS} 
    >
   <SwiperSlide data-aos="fade-up-20"  className="!flex !flex-col !items-center !justify-start !gap-6 p-8 bg-white  transition-colors duration-300 ease-in-out hover:bg-opacity-20 bg-opacity-10 border-2 border-[#625FB8]  text-white  rounded-md  border-3">
          <div className="flex gap-x-3 items-center">
            <img
              width="40px"
              height="40px"
              src={web_dev}
            />
            <h3 className="md:text-3xl text-2xl font-semibold">Web Development</h3>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-10 h-auto justify-between items-center ">
              <div className="grid w-fit  justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/373669/html.svg"
                  width="50px"
                  height="50px"
                />
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  width="50px"
                  height="50px"
                />
                <p>CSS</p>
              </div>
              <div className="grid w-fit  justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/354310/sass.svg"
                  width="50px"
                  height="50px"
                />
                <p>SCSS</p>
              </div>
              <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg"
                  width="50px"
                  height="50px"
                />
                <p>Bootstrap</p>
              </div>
              <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  width="50px"
                  height="50px"
                />
                <p>Tailwind</p>
              </div>
              <div className="flex flex-col items-center  justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/353925/javascript.svg"
                  width="50px"
                  height="50px"
                  className=""
                />
                <p>Javascript</p>
              </div>
              <div className="grid w-fit justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/452210/git.svg"
                  width="50px"
                  height="50px"
                />
                <p>Git</p>
              </div>
              <div className="grid w-fit  justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/354259/react.svg"
                  width="50px"
                  height="50px"
                />
                <p>React</p>
              </div>
              <div className="grid w-fit  justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img
                  src="https://www.svgrepo.com/show/303503/shopify-logo.svg"
                  width="50px"
                  height="50px"
                />
                <p>Shopify</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
      <SwiperSlide data-aos-delay="100" data-aos="fade-up-20" className="!flex !flex-col !items-center !justify-start !gap-6 p-8 bg-white  transition-colors duration-300 ease-in-out hover:bg-opacity-20 bg-opacity-10 border-2 border-[#625FB8]  text-white rounded-md border-3">
          <div className="flex gap-x-3 items-center ">
            <img
              width="40px"
              height="40px"
              src={vector}
            />
            <h3 className="md:text-3xl text-2xl font-semibold">Graphic Design</h3>
          </div>
          <div className="flex gap-10 w-fit items-start">
            <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img
                src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg"
                width="50px"
                height="50px"
              />
              <p>Photoshop</p>
            </div>

            <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img
                src="https://www.svgrepo.com/show/303184/adobe-illustrator-cc-logo.svg"
                width="50px"
                height="50px"
              />
              <p>Illustrator</p>
            </div>
            <div className="flex flex-col items-center  justify-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
           <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/coreldraw-icon.png' width="35px" height="35px" alt=''/>
              <p>Corel Draw</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  data-aos="fade-up-20" data-aos-delay="200" className="!flex !flex-col !items-center !justify-start !gap-6 p-8 bg-white  transition-colors duration-300 ease-in-out hover:bg-opacity-20 bg-opacity-10 border-2 border-[#625FB8]  text-white rounded-md border-3">
          <div className="flex gap-x-3 items-center justify-center">
            <img
              width="40px"
              height="40px"
              src={ux_design}
            />
            <h3 className="md:text-3xl text-2xl font-semibold">UX/UI</h3>
          </div>
          <div className="grid w-full justify-start ">
            <div className="flex flex-col w-fit transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img
                src="https://www.svgrepo.com/show/448222/figma.svg"
                width="50px"
                height="50px"
              />
              <p>Figma</p>
            </div>
          </div>
        </SwiperSlide>
        
    </Swiper>
    </div>
  );
};