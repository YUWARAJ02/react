import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Home = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover'
                src='assets/bg.jpg' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/60'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Yuwaraj T K</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a {' '}
                        <TypeAnimation
                            sequence={[
                                ' Developer', // Types 'One'
                                2000, // Waits 2s
                                ' Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                ' Fresher', // Types 'Three' without deleting 'Two'
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        /></h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://twitter.com' target='_blank'>
                            <FaTwitter size={20} className='text-cyan-600 cursor-pointer hover:scale-150' /></a>
                        <FaFacebookF size={20} className='text-blue-800 cursor-pointer hover:scale-150' />
                        <FaInstagram size={20} className='text-rose-700 cursor-pointer hover:scale-150' />
                        <FaLinkedin size={20} className='text-blue-600 cursor-pointer hover:scale-150' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;