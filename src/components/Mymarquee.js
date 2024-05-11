import React from 'react';
import Marquee from "react-fast-marquee";

const Mymarquee = () => {

  return (
    <div>
      <Marquee 
      direction="left" className='bg-[#161947] md:!w-[100vw] self-end'
    //   speed={100}
      >
        <div className='flex py-6 items-center justify-around w-fit gap-10 md:w-[100vw]'>
        <div className='flex gap-2 text-2xl'><span>*</span><p>Web Development</p></div>
        <div className='flex gap-2 text-2xl'><span>*</span><p>Graphic Design</p></div>
        <div className='flex gap-2 text-2xl'><span>*</span><p>UX/UI</p></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Mymarquee;
