import React from 'react'
import HeadingPart from '../HeadingPart/HeadingPart'
import Button from '../Button/Button'
import "./MoreAboutMe.css"

const MoreAboutMe = () => {
  return (
    <section className="Aboutme-section flex flex-col gap-5 flex-wrap px-4">
    <HeadingPart text="More About Me.. "></HeadingPart>
    <div className="aboutpara text-2xl flex flex-col gap-6 items-center px-5">
    <p>
      I am a student of Electronics and Communication Engineering at IIIT
      Trichy, from the ECE batch of 2026. I have a strong interest in web
      development and data science, driven by a desire to create meaningful
      and accessible solutions through technology.
    </p>
    <p>
      Currently, I'm focusing on mastering both front-end and back-end
      development, with the goal of building dynamic and user-friendly
      websites and applications. Additionally, I am exploring the world of
      data, learning SQL and Python libraries like NumPy and Pandas to
      enhance my skills in data analysis and machine learning.
    </p>
    <p>
      When I'm not coding, I enjoy exploring new technologies, working on
      personal projects, or brainstorming ideas for my startup. My ultimate
      objective is to combine my technical skills with my passion for
      innovation to contribute to projects that have a positive impact on
      people's lives.
    </p>
    <p>
      I am always open to connecting with like-minded individuals and
      exploring new opportunities, whether through internships, freelance
      work, or collaborative projects. Let's create something amazing
      together!
    </p>
    <div className="max-w-fit">
          <Button text="Download My Resume" to="#"></Button>
    </div>
    </div>
   
  </section>

  )
}

export default MoreAboutMe
