import React from 'react'
import './brandingvideo.css'

 const brandingvideo = () => {
   return (
     <div className='bv-container'>
        <div className="container">
            
            <video className='bv-video' loop muted autoPlay controls="" >
               <source src="/video.mp4" type='video/mp4' />
           </video>
      </div>
    </div>
 )
 }

export default brandingvideo