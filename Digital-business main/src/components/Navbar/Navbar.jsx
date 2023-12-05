import React from 'react'
import './Navbar.css'



const Navbar = () => {
  return (
        <div className="n-wrapper ">
            <div className="container">
                <div className="n-container">
                    {/* left  */}

                    <div className="n-logo">
                        <span>CODE</span>
                    </div>

                    {/* right  */}
                    <div className="n-right">
                        <div className="n-menu">
                            
                            <span>What we do</span>
                            <span>How it works</span>
                            <span>Who we invest</span>
                            <span>Testimonials</span>
                        </div>
                        <div className="fund-button">
                            Get Funded
                        </div>
                    </div>

                </div>
            </div>


            {/* {mobile } */}

{/*              
            <div className="nm-container">
                mobile version
            </div> */}


        </div>

    )
}

export default Navbar