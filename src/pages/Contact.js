import React from 'react'
import { motion } from "framer-motion"

function Contact() {
  return (
    <div>
       


  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
    className='dumeel'
  />

<motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
  className='dumeel'
/>


    </div>
  )
}

export default Contact