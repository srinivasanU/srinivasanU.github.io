import React from 'react'
import ParticlesBg from "particles-bg";
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
import Home from '../home/Home'

export default function Content() {
    return (
        <div className="App flex flex-col h-screen">
            <ParticlesBg type="circle" bg={true} />
            {/* <Header /> */}
            <Home />
            {/* <Footer /> */}
        </div>
    )
}
