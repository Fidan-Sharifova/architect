import React from 'react'

function Project({ fidanProject }) {

    return (

        <div key={fidanProject.id} className='projectCards'>
            {
                <div>
                    <img src={fidanProject.image} alt="" />
                    <p>{fidanProject.title}</p>
                </div>
            }
        </div>
    )
}

export default Project