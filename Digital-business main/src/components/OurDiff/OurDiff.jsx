import React from 'react'
import './OurDiff.css'
import { ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'


const OurDiff = () => {
    return (
        <div>
            <div className="od-wrapper">
                <div className="container">
                    <div className="od-container">
                        <div className="od-head">
                            <span className='tag'>Our Difference</span>
                            <span className='title'>Lorem ipsum dolor sit amet.</span>
                            <span className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam minus quam necessitatibus dolorum. Officia, consequuntur.</span>
                        </div>
                        <div className="od-features">
                            {
                                ourDiffFeatures.map((fe,i)=>(
                                    <div    key={i} className='od-feature'>
                                        <Image  src={fe.icon} width={128} height={128} />
                                        <span className='sec-title'>{fe.title}</span>
                                        <span className='text'>{fe.des}</span>
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

export default OurDiff