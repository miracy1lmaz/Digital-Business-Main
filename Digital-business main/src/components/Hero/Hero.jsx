"use client"

import React from 'react'
import Email from 'src/components/EmailBox/Email.jsx'
import './Hero.css'
import { HeroData } from '@/src/utils/data'
import { motion } from 'framer-motion'

const Hero = () => {

    const variants = (delay) => ({

        inital: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "string",
                damping: 25,
                duration: 2.5,
                delay
            }
        }

    })


    return (

        <div className="h-wrapper">
            <div className="container">
                <div className="h-container">

                    <div className="h-left">





                        <div className="image-row">
                            {
                                HeroData.slice(0, 3).map((person, i) => (

                                    <div className='person-pill' key={i}>
                                        <motion.div inital={"initial"} animate={"animate"} variants={variants(person.delay)} style={{ backgroundColor: person.bg }} className="person-pill-bg">
                                            <motion.img src={person.src} alt={person.src} />
                                        </motion.div>
                                    </div>
                                ))

                            }

                        </div>


                        <div className="image-row">
                            {
                                HeroData.slice(3, 6).map((person, i) => (

                                    <div className='person-pill' key={i}>
                                        <motion.div className="person-pill-bg">
                                            <motion.img src={person.src} alt={person.src} />
                                        </motion.div>
                                    </div>
                                ))

                            }

                        </div>

                    </div>

                    <div className="h-right">

                        <div className="h-title">
                            <span>Redefine How</span>
                            <span>You Grow Your</span>
                            <span>Digital Business</span>
                        </div>

                        <div className="h-des">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum.
                        </div>

                        <Email />


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero