import React from 'react'
import Card from './CArd'

function Cards({cardData}) {

  return (
   <>
   {
     cardData && cardData.map((data,index)=>{
        <Card data={data} key={index}/>
    })
   }

   </>
  )
}

export default Cards