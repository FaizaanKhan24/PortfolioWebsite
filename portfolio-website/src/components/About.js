import './About.css';
import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaAndroid,
  FaWindows,
  FaDocker,
  FaAppStoreIos,
} from 'react-icons/fa';
import { SiDjango, SiCsharp, SiXamarin, SiFlask } from 'react-icons/si';
import { DiDotnet,  } from 'react-icons/di';

function About(){
  return (
    <div className='about-container'>
      <div className='technologies'>
        <h3>I have worked on</h3>
        <IconContext.Provider value={{className:'tech-icons'}}>
          <div className='technologies-list'>
            {/* Web */}
            <div>
              <FaReact />
              <FaJs />
              <FaHtml5 />
              <FaCss3Alt />
            </div>
            {/* Mobile */}
            <div>
              <SiXamarin />
              <FaAppStoreIos />
              <FaAndroid />
              <FaWindows />
            </div>
            {/* Backend */}
            <div>
              <FaDatabase />
              <FaDocker />
              <DiDotnet />
              <SiDjango />
              <SiFlask />
            </div>
            {/* Programming Languages */}
            <div>
              <FaPython />
              <SiCsharp />
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className='about-me'>
        <div>
        <p>Hello, my name is <span className='name-color'><b>Faizaan Khan</b></span>. I'm a student at Binghamton University, New York. </p>
        {/* <p>I find it satisfying to code up UI/UX designs into web and mobile application. It brings pleasure to my eyes. Everyday I wake up trying to be an aesthetic-head, if that is even a thing. LOL (No offense potterheads)
        Talking about Front-end, I have also got my keyboard dirty working on Databases and APIs for my projects.</p>
        <p>I have worked as a Full-Stack Mobile developer at Syncfusion, India. The idea of having the ability to build products that help smoothen our day to day life is why I do what I do. I have constantly tired to expand my knowledge pool and improve myself as a developer and person. This journey has brought me here. Currently, I'm looking for a full-time opportunity.</p> */}
        <p>
        Everyone has their “Hello world” moment, mine was when I developed a tic-tac-toe application in Python by coping code from someone else’s GitHub and proudly publishing as my own repository. Am I guilty? In my defense, it’s were it all started. Now, I make websites and mobile application.
        </p>
        <p>
        My first real-life product experience was working on an iOS application using Xamarin Forms. From there I worked on different projects. I was entrusted with developing the UI/UX for an application from scratch. I got the following learning and experience: 
        </p>
        <ul>
          <li>Working with iOS and Android SDKs</li>
          <li>How to approach a problem</li>
          <li>Debugging bugs and issues</li>
          <li>Handling deadlines</li>
          <li>Importance of testing</li>
          <li>Developing an application with the perspective that everything can go wrong and break the application</li>
        </ul>
        <p>
        Apart from mobile development experience, I have also worked on web applications. I’m confident in my full-stack development skills and would wanna become stronger by working on more diverse projects and stacks.
        </p>
        <p>
        Since Fall 2021, I’ve been pursuing my Masters in Computer Science at Binghamton University. I’ve completed the following coursework.
        </p>
        <ul>
          <li>Operating Systems</li>
          <li>Programming Languages</li>
          <li>Machine Learning</li>
          <li>Cloud Computing</li>
          <li>Database Systems</li>
          <li>Design and Analysis of Algorithms</li>
          <li>Computer Architecture</li>
          <li>Design Patterns</li>
          <li>Introduction to Data Mining</li>
        </ul>
        <p>
        Currently, I’m looking for a full-time opportunity in the field of Software Engineering.
        </p>
        </div>
      </div>
    </div>
  )
}

export default About