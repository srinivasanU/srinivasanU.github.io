import React from 'react'
import Header from '../header/Header'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import {resumedata} from '../data/data';

export default function Content() {
    return (
        <div className="container App flex flex-col h-screen">
            <Header />
            <Body {...resumedata}/>
            <Footer />
        </div>
    )
}
