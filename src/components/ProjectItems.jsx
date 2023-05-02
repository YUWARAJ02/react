import React, { useState, useEffect } from 'react';


const ProjectItems = ({ images, intervaltime, title , about, link}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervaltime);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl
        shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-gray-800 to-[#0b235f]'>
            <img
                src={images[currentIndex]}
                alt='project slide'
                className='w-fit h-fit rounded-2xl group-hover:opacity-10'
            />
            <div className='hidden group-hover:block absolute items-center'>
                <h3 className='text-lg font-bold text-white tracking-wider text-center'>
                   <a href={link} target='_blank'>{title}</a>
                    
                </h3>
                <p className='md:text-sm sm:text-xs font-medium text-yellow-200 tracking-tight text-center p-3 block'>
                {about}</p>
            </div>
        </div>
    );
};


export default ProjectItems;