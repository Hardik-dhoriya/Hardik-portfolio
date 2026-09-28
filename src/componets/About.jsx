import React from 'react'
import { motion } from 'framer-motion' 
import { aboutInfo, assets } from '../assets/assets.js'

function About() {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{ duration : 0.6 ,ease :'easeOut' }}
    viewport={{once :true}}
    id='about'
    className='py-20 bg-dark-200'
    >   
        <div className='container mx-0 px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple'>Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
        {/* image + my journey  */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{ duration : 0.9 ,ease :'easeOut' }}
                    viewport={{once :false , amount:0.2}}
                    className='w-full h-full object-cover'
                    src={assets.profileImg} alt='Hardik Dhoriya'/>

                </div>
                {/* my journey */}

                <motion.div
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration : 0.9 ,ease :'easeOut' }}
                viewport={{once :false , amount:0.2}}
                className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>I'm a passionate Full Stack Developer and MCA graduate with a strong interest in building modern, responsive, and user-friendly web applications. My journey started with learning HTML, CSS, and JavaScript, and gradually progressed to developing full-stack applications using React.js, Node.js, Express.js, and MongoDB.</p>
                        <p className='text-gray-300 mb-6'>During my learning journey, I worked on projects like Hotel Management, Car Rental, and user authentication systems, where I practiced CRUD operations, REST APIs, database integration, and JWT authentication.


                        </p>

                    </div>
                    {/* cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            aboutInfo.map((data,index) =>(
                                <div className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                                key = {index}
                                >
                                    <div className='text-purple text-4xl mb-4'>
                                        <data.icon />
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-semibold'>
                                                {data.title}
                                            </h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        


                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </motion.div>

            </div>
        </div>
      
    </motion.div>
  )
}

export default About
