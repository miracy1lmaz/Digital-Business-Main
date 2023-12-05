import React from 'react'
import './whatwedo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'

const Whatwedo = () => {
  return (

        <div className="wwd-wrapper">
            <div className="container">
                <div className="wwd-container">
                    <div className="www-head">
                                <span className='tag'   style={{display:'flex', justifyContent:'center'}}>What we do</span>
                                <br />
                                <span className='title' style={{display:'flex'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente, velit fugit unde quaerat blanditiis!</span>
                                <br />
                                <span style={{display:'flex',justifyContent:'center'}}className='des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>

                <div className="wwd-blocks">
                    <div className="wwd-block"><span className='sec-title'>Lorem, ipsum dolor.</span></div>
                </div>


                <div className="block-features">
                    {
                        features.slice(0,3).map((f,i) => (
                            <div className='block-feature' key={i}>
                                <Image src={f.icon} alt={f} width={60} height={60} />
                                <span>{f.title}</span>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="wwd-block">
                    
                </div>
            </div>
        </div>


    )
}

export default Whatwedo