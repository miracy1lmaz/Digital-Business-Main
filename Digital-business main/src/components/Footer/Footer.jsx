import React from 'react'
import "./Footer.css"
import Email from '../EmailBox/Email'

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className="container">
                <div className="f-container">
                    <span className='title' style={{marginLeft:"30px"}}>Fet Funded Today?</span>
                    
<div className="email">  <Email/> </div>                   
                    <hr />
                    <div className="f-menu">


                        <span>Home</span>
                        <span>what we do</span>
                        <span>how it works</span>
                        <span>who we invest in</span>
                        <span>testimonials</span>



                    </div>
                    <hr />
                    <div className="text">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer