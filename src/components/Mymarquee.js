import React, { useState, useEffect} from 'react';
import Marquee from "react-fast-marquee";
import { throttle } from 'lodash';

const Mymarquee = () => {

  const [autoFill, setAutoFill] = useState(false);

  useEffect(() => {
    // Throttled function to update autofill
    const updateAutoFill = throttle(() => {
      setAutoFill(window.innerWidth < 768);
    }, 250); // Throttle so it only fires at most once per 250ms
    
    updateAutoFill();

    window.addEventListener('resize', updateAutoFill);

    return () => {
      updateAutoFill.cancel();
      window.removeEventListener('resize', updateAutoFill);
    };
  }, []);

  return (
    <div>
      <Marquee 
      direction="left" className='bg-[#161947] md:!w-[100vw]'
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
