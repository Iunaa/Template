import React from 'react'

const CardRelatedItem = ({heading, textbtn}) => {
  return (
    <div className={`related__card ${heading.replace(` `, ``).toLowerCase()}`}>
        <p className={`related__${textbtn.toLowerCase()}`}>{textbtn}</p>
        <h3 className={`related__${heading.replace(` `, ``).toLowerCase()}`}>{heading}</h3>
    
    </div>
   
  )
}

export default CardRelatedItem