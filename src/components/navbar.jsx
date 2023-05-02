import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMail, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { FaUserShield } from 'react-icons/fa'

const Head = () => {
    const [nav, setnav] = useState(false);
    const arr = [AiOutlineHome, AiOutlineUser, GrProjects, BsPerson, AiOutlineMail];
    const name = ['Home', 'About', 'Project', 'Resume', 'Contact'];

    function handlenav() {
        setnav(!nav)
    }
    function handleResumeDownload() {

        window.open('/assets/resume.pdf', '_blank');
    }
    return (
        <div>
            <AiOutlineMenu onClick={handlenav} className='absolute top-4 right-4 z-[99] md:hidden hover: cursor-pointer' />
            {
                nav ? (
                    <div className='fixed w-full h-screen backdrop-blur-2xl flex flex-col justify-center items-center z-20 md:hidden'>
                        <FaUserShield className="absolute bottom-0 right-0" />
                        {arr.map((Icon, index) => {
                            return (
                                <a href={'#' + name[index].toLowerCase()} key={index}
                                    onClick={name[index] === 'Resume' ? () => { handleResumeDownload(); handlenav(); } : handlenav}
                                    className='w-[75%] flex justify-center items-center
                                    rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4
                                    cursor-pointer hover:scale-110 ease-in duration-200'>
                                    <Icon size={20} className='hover:scale-150 ease-in duration-200' />
                                    <span className='pl-4 font-bold'>{name[index]}</span>
                                </a>
                            );
                        })}
                    </div>
                )
                    : (
                        ''
                    )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <FaUserShield className="fixed bottom-0 right-0" />
                    {
                        arr.map((Icon, index) => {
                            return (
                                <a href={'#' + name[index].toLowerCase()} key={index}
                                    onClick={() => {
                                        if (name[index] === 'Resume')
                                            handleResumeDownload();
                                    }}
                                    className='rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer
                            hover:scale-125 ease-in duration-300'>
                                    <Icon size={20} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Head;
