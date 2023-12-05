import React from 'react'

import './HowItWorks.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
const Howitworks = () => {
  return (
    <div className='hit-wrapper'>
        <div className="container">
            <div className="hit-container">


        <div className="hit-head">
            <span className='tag'>How it works</span>
            <span className='title'>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        </div>

            <div className="hiw-features">
                {
                    hitFeatures.map((fe,i)=>(
                        <div className='hiw-feature'  key={i}>
                            <div className="detail">
                                <span className='des'></span>
                                <span className='sec-title'>{fe.title}</span>
                                <span className='text'>{fe.des}</span>
                            </div>
                                <Image src={fe.icon} width={128} height={128}/>
                        </div>
                    ))
                }
            </div>

            </div>
        </div>

    </div>
  )
}

export default Howitworks