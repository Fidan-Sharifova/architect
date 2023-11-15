import React from 'react'
import Hero from './Hero'
import Projects from './projects'
import About from './About'
import Location from './Location'
import Project from './Project'
import Cards from './Cards'

function Section({projects, cardData}) {
  
    return (
        <>
            <Hero />
            <Projects fidanProjects={projects} />
            <Cards cardData={cardData} />
            <About />
            <Location />
        </>
    )
}

export default Section