import React from 'react'
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

export default function Home() {
  return (
    <div className='flex-grow'> 
        <ParticlesBg type="circle" bg={true} />
        <ParticlesBg type="circle" bg={true} />
        <ParticlesBg type="circle" bg={true} />
        <ParticlesBg type="circle" bg={true} />
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center h-screen">
                <Fade bottom duration={2000}>
                    <h1 className="font-bold tracking-widest text-[90px] text-white">Site Under Development</h1>
                </Fade>
            </div>
        </div>
        
        {/* <div className="grid place-items-center h-screen">
          <div className="w-screen">
            <Fade bottom>
              <h1 className="font-bold tracking-widest text-[90px] text-white">SRINIVASAN</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 className="tracking-widest text-[20px] text-white">I am a web development engineer and I use react to develop pages. This project is a resume template that can be used as the project home page or resume page.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="/#" className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href="/#" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
    </div>
  )
}
