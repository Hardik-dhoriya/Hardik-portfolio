import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_yhu1pfs",
        "template_1p33x23",
        form.current,
        {
          publicKey: "stbkHh5JiHaL7CALI",
        }
      )
      .then(() => {
        setStatus("Email sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        setStatus("Failed to send email. Please try again.");
      });
  };
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{ duration : 1 ,ease :'easeOut' }}
    viewport={{once :false , amount:0.2}}
    id='contact'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In 
                <span className='text-purple'> Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact form */}
                <div>
                    <form className='space-y-6'
                    ref={form}
                    onSubmit={sendEmail}>
                        <div>
                            <label htmlFor='name' className='block text-gray-300 mb-2'>
                                Your Name
                            </label>
                            <input 
                            className='w-full bg-dark-300 broder broder-dark-400 rounded-lg px-4 py-3 outline-none'
                            id="name"
                            name="from_name"
                            type="text"
                            required
                            placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <input 
                            className='w-full bg-dark-300 broder broder-dark-400 rounded-lg px-4 py-3 outline-none'
                            id="email"
                            name="from_email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-gray-300 mb-2'>
                                Your Message
                            </label>
                            <textarea 
                            className='w-full h-40 bg-dark-300 broder broder-dark-400 rounded-lg px-4 py-3 outline-none'
                            id="message"
                            name="message"
                            required
                            placeholder="Write your message..."
                            />
                        </div>
                        <button type='submit'
                        disabled={status === "Sending..."}
                        className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'
                        >
                            {status === "Sending..." ? "Sending..." : "Send"}
                        </button>
                        {status && (
                            <p className="text-center text-sm text-gray-300">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
                {/* Contact information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Location
                            </h3>
                            <p className='text-gray-400'>Ahmedabad, Gujarat, India</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Email
                            </h3>
                            <p className='text-gray-400'>hardik.dhoriya.10@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Phone
                            </h3>
                            <p className='text-gray-400'>+91 7859819549</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>
                            Follow Me
                        </h3>
                        <div className='flex space-x-4'>
                            <a 
                            href='https://github.com/Hardik-dhoriya'
                            className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'
                            >
                                <FaGithub />
                            </a>
                            <a 
                            href='https://www.linkedin.com/in/dhoriya-hardik-731337222/'
                            className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'
                            >
                                <FaLinkedin />
                            </a>
                            <a 
                            href='https://x.com/Hardik20033'
                            className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'
                            >
                                <FaTwitter />
                            </a>
                            <a 
                            href='#'
                            className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'
                            >
                                <FaDribbble />
                            </a>
                            

                        </div>

                    </div>

                </div>
            </div>
        </div>

        

    </motion.div>
  )
}

export default Contact
