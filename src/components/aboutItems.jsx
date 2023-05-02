import React from 'react';

const AboutItems = ({ level, year, title, grade }) => {
    return (
        <div className="mb-8 md:mb-10">
            <div className="flex items-center mb-1">
                <div className="bg-[#001b5e] text-white px-5 py-2 text-sm font-semibold rounded-md">{year}</div>
                <div className="ml-3 text-base font-semibold">{title}</div>
                <span className=' px-5 py-2 font-bold text-blue-800'>{level}</span>
            </div>

        </div>
    );
};

export default AboutItems;
