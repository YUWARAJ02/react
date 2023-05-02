import React from 'react';
import AboutItems from './aboutItems';

const eduData = [
    {
        level: '10th',
        year: 2017,
        name: 'SRI RAM DAYAL KHEMKA VIVEKANANDA VIDYALAYA JUNIOR SCHOOL',
        grade: '9.6(10.0)'
    },
    {
        level: '12th',
        year: 2019,
        name: 'VELAMMAL MATRIC HIGHER SECONDARY SCHOOL',
        grade: '438(600)'
    },
    {
        level: 'B.E. - Computer Science And Engineering',
        year: 2023,
        name: 'VEL TECH HIGH TECH',
        grade: '8.6'
    }
];
const abt = [
    {
        title: 'Skills',
        my: ['Java', 'CoreJava', 'JSP', 'MYSQL', 'C', 'ReactJS', 'NodeJS', 'Deep Learning']
    },
    {
        title: 'Interest',
        my: ['GAMING', 'WEB DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE']
    }];

const About = () => {
    return (

        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Details</h1>
            <h3 className='text-xl font-bold mt-8 mb-2'>Educational Details</h3>
            <div className='divide-y divide-gray-200'>
                {eduData.map((item, index) => {
                    return (
                        <AboutItems
                            key={index}
                            level={item.level}
                            year={item.year}
                            title={item.name}
                            grade={item.grade}
                        />)

                })}
            </div>

            {abt.map((skill, index) => (
                <div className="py-6" key={index}>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <ul className="space-y-2">
                        {skill.my.map((item, idx) => (
                            <li key={idx} className="relative flex items-center">
                                <div className="w-4 h-4 mr-2 rounded-full bg-[#001b5e]"></div>
                                <span className="text-lg text-gray-700">{item}</span>
                                <div className="absolute left-0 top-0 w-0 h-full bg-[#001b5e] rounded-full animate-pulse"></div>

                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default About;
