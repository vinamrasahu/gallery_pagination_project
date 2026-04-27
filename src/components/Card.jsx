import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank" > 
        <div className='h-40 w-44 bg-white' >
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt="gallery image" /> 
        </div> 
      </a>


    </div>
  )
}

export default Card