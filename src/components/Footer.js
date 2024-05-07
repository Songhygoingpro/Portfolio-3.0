import React from "react";

function Footer(){
    return (
<div className="bg-[#161947] p-8 grid justify-start gap-4">
    <div data-aos="fade-up-20" data-aos-offset="0">
   <a href='mailto:hamsonghy09@gmail.com' className="font-medium hover:underline">hamsonghy09@gmail.com</a>
    </div>
    <div className="md:flex grid gap-6 justify-start" data-aos="fade-up-20" data-aos-offset="0">
        <a href='https://t.me/Songhy994'  className="text-[14px] hover:underline font-medium">Telegram</a>
        <a href='https://www.facebook.com/songhy.gt.9' className="text-[14px] hover:underline font-medium">Facebook</a>
    </div>
</div>
    )
}

export default Footer;