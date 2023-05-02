import React from 'react';
import ProjectItems from './ProjectItems';


function image(folderName,flength) {
    const temp=[];
    for (let index = 1; index <= flength; index++) {
        temp.push(`/assets/${folderName}/${index}.png`);
        
    }
    return temp;
}

const Project = () => {
    

    return (
        <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                These projects have encompassed a range of tasks, such as research, analysis, design, development, implementation,
                and management, depending on the specific requirements of each project. By sharing specific details and outcomes, I
                can provide tangible evidence of my expertise and demonstrate my approach to problem-solving. It's important to
                tailor these examples to the specific audience and context of each presentation, highlighting the most relevant
                aspects of my work for each situation. Overall, I believe that sharing my project experiences is a powerful way to
                demonstrate my value and expertise in my field.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                {/* try slider */}
                
                <ProjectItems images={image('crypto',9)} 
                intervaltime={1500} 
                title='Cryptocurrency and NFT price forecasting'  
                link='https://github.com/YUWARAJ02/crypto-tk'
                about='The purpose of this project is to develop a comprehensive model for cryptocurrency price forecasting and NFT market analysis using deep learning techniques'/>
                

                <ProjectItems 
                images={image('underwater',6)}
                intervaltime={999} 
                title='Under Water Object Detection' about="This project aims to develop a system for underwater object detection using 
                a Convolutional Neural Network (CNN)."/>
                

                <ProjectItems 
                images={image('hcs',6)}
                intervaltime={1550} 
                title='Health care site' 
                link='https://github.com/YUWARAJ02/Health-care-site'
                about='This healthcare site provides users with a convenient and reliable platform for predicting heart disease, kidney disease, and common diseases.'/>
                

                <ProjectItems 
                images={image('ckd',6)} 
                intervaltime={1470} 
                link='https://github.com/IBM-EPBL/IBM-Project-18229-1659681520'
                title='chronic kidney disease predictions' about='This project aims to develop a machine learning-based system for predicting chronic kidney disease (CKD).'/>
            </div>
        </div>
    );
};

export default Project;
