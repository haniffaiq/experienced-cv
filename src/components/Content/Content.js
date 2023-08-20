import React from 'react';
import profile from '../../assets/images/blank-profile-picture.jpg'
import Timeline from '../Timeline/Timeline';

const experiences = [
    {
        year: '202X',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        year: '2021',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },

    {
        year: '2021',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
    {
        year: '2021',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },

    {
        year: '2021',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },

    {
        year: '2021',
        title: 'Position A',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
    // ... add more experiences
];
const Content = () => {
    return (
        <div className="text-white min-w-screen">
            <div className="py-4">
                <div className="container mx-auto grid grid-cols-2 items-center my-10">
                    <div className="col-span-1">
                        <p className='mx-10 text-center align-center justify-center font-bold text-2xl uppercase '>What are you looking for here? Are you searching about me?
                            Wow, I feel honored that you want to know about me. Come on, I'll help you get to know me better.</p>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img src={profile} alt="Profile" className="w-1/2 h-1/2 mr-2 rounded-full hover:shadow-2xl hover:shadow-black " />
                    </div>
                </div>
                <div className="container mx-auto flex items-center justify-center my-10">
                    <p className='text-2xl font-bold'> -- About Me -- </p>
                </div>
                <div className="container mx-auto flex items-center justify-center my-10 px-40">
                    <p className='text-md font-thin capitalize text-center'>I am a software developer with a deep passion for technology and creativity. I'm always excited to solve problems and create innovative solutions. When not immersed in the world of code, I find joy in art, reading books, and exploring the outdoors. I believe that every challenge is an opportunity to learn and grow, and I'm highly enthusiastic about continually pursuing knowledge and advancing in my career as a developer.</p>
                </div>

                <div className="container mx-auto flex items-center justify-center">
                    <p className='text-2xl font-bold'>-- Working Experience -- </p>
                </div>
                <div className="container mx-auto flex items-center justify-between my-5">
                    <Timeline experiences={experiences} />
                </div>
                <div className="container mx-auto flex items-center justify-center">
                    <p className='text-2xl font-bold'>-- Tech Stack -- </p>
                </div>
                

            </div>
        </div>
    );
};

export default Content;