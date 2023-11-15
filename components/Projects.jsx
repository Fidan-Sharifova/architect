import React from 'react'
import Project from './Project'

function Projects({fidanProjects}) {
  return (
    <>
    {
      fidanProjects &&  fidanProjects.map((fidanProject,index,fidanProjects)=>{
            return (
            
            <Project key={index} fidanProject={fidanProject}/>
            )
        })
    }


    </>
  )
}

export default Projects