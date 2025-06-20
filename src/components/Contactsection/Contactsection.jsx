import React from "react";
import SocialContactCard from "../SocialContactCard/SocialContactCard";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const Contactsection = () => {
  return (
    <section className="overflow-hidden px-4 sm:px-8">
      <div className="text-center py-6 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Connect With Me
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Got a project, idea, or just want to say hi? I'm just a message away.
        </p>
      </div>

      <div className="social flex flex-wrap justify-center gap-6 m-2">
        <SocialContactCard
          socialmedialogo={<TbBrandGmail className="text-5xl socialicon" />}
          mediatext="Gmail"
          colorClass="bg-red-600"
          socialmedialink="mailto:hemanshuwork26@gmail.com"
        />
        <SocialContactCard
          socialmedialogo={<FaGithub className="text-5xl socialicon" />}
          mediatext="GitHub"
          colorClass="bg-[#333333]"
          socialmedialink="https://github.com/Hemanshujc1"
        />
        <SocialContactCard
          socialmedialogo={<FaLinkedin className="text-5xl socialicon" />}
          mediatext="Linkedin"
          colorClass="bg-[#0077B5]"
          socialmedialink="https://www.linkedin.com/in/hemanshuchoudhary/"
        />
        <SocialContactCard
          socialmedialogo={<FaWhatsapp className="text-5xl socialicon" />}
          mediatext="Whatsapp"
          colorClass="bg-[#25D366]"
          socialmedialink="https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio."
        />
      </div>
    </section>
  );
};

export default Contactsection;
