import React from 'react'
import './Whowe.css'
import { whoWeInvest } from '@/src/utils/data'
const Whowe = () => {
  return (
    <div    className='wwi-wrapper'>
        <div className="container">
            <div className="wwi-container">


            <div className="wwi-right">
                <img style={{marginRight: "5rem;"}}    src="persons.png" alt="persons" />
            </div>






                    {/* left  */}

                <div className="wwi-left">
                    <div className="head">
                        <span className='tag'>Who we invest in</span>
                        <span className='title'>Lorem, ipsum.
                        <br />  Lorem ipsum dolor sit amet. 
                        </span>  

                    </div>


                    <div className="wwi-features">
                        {whoWeInvest.map((fe,i)=>(
                                <div key={i} className="wwi-feature">
                                    <span className='des'>{fe.title}</span>
                                    <span className='textt'>{fe.des}</span>
                                </div>
                        ))
                    }
                    </div>
                </div>





            </div>
        </div>
    </div>
  )
}

export default Whowe