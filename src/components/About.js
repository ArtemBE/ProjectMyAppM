import React, { useEffect } from 'react'
import AboutDescription from './AboutDescription'
import Carousel from './Carousel'
import CarouselRings from './CarouselRings'
import { useSelector } from 'react-redux'
import carousel from '../scripts/carousel'

export default function About() {
    const doc = useSelector(st=>st.doc);
    useEffect(()=>{
        carousel(doc);
    });
    return (
        <main className="about-main">
            <div className="about-container">
                <AboutDescription/>
                <Carousel/>
                <CarouselRings/>
            </div>
        </main>
    )
}
