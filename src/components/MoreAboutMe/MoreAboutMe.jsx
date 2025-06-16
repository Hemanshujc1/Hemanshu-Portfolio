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
       I’ve channeled my curiosity into full-stack web development. Every day, I dive into React, Node.js, TypeScript, Vite, and Tailwind CSS - building apps that are as performant as they are user‑friendly.
    </p>
    <p>
    Beyond MERN, I’m honing my problem‑solving skills through DSA challenges and hands‑on projects in Next.js, TypeScript, and Tailwind CSS. Whether it’s refining an algorithm or architecting a new feature, I thrive on translating complex requirements into clean, maintainable code.
    </p>
    <p>
    When I’m not coding, you’ll find me sketching out ideas for side projects or exploring Web3 protocols. I thrive on collaboration—pair‑programming with peers, gathering feedback, and iterating fast to bring concepts to life.
    </p>
    <p>
    I’m always open to new opportunities—internships, freelance gigs, or team projects. If you’re looking for a passionate developer who learns quickly and delivers impactful solutions, let’s connect and create something great together!
    </p>
    <div className="max-w-fit">
          <Button text="Download My Resume" to="#"></Button>
    </div>
    </div>
   
  </section>

  )
}

export default MoreAboutMe
