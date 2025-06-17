import React from "react";
import SocialContactCard from "../SocialContactCard/SocialContactCard";
const Contactsection = () => {
  
  return (
    <section className="overflow-hidden">
      
      <div className="text-center py-6 mb-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-white transform rotate-[6deg]">
          Connect With Me
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 transform rotate-[6deg]"></div>
         <p className="text-gray-400 mt-4 text-lg font-semibold">
  Got a project, idea, or just want to say hi? I'm just a message away.
      </p> 
      </div>
      <div className="social flex flex-row justify-evenly w-full">
     
        <SocialContactCard
          socialmedialogo="./icons8-gmail.svg"
          mediatext="Gmail"
          colorClass="bg-blue-600"
          socialmedialink="mailto:hemanshuwork26@gmail.com"
        ></SocialContactCard>
        <SocialContactCard
          socialmedialogo="./icons8-github.svg"
          mediatext="GitHub"
          colorClass="bg-[#333333]"
          socialmedialink="https://github.com/Hemanshujc1"
        ></SocialContactCard>
        <SocialContactCard
          socialmedialogo="./icons8-linkedin.svg"
          mediatext="Linkedin"
          colorClass="bg-[#0077B5]"
          socialmedialink="https://www.linkedin.com/in/hemanshuchoudhary/ "
        ></SocialContactCard>
        <SocialContactCard
          socialmedialogo="./icons8-whatsapp.svg"
          mediatext="Whatsapp"
          colorClass="bg-[#25D366]"
          socialmedialink="https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio."
        ></SocialContactCard>
      </div>
    </section>
  );
};

export default Contactsection;
