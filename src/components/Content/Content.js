import React from 'react';
import profile from '../../assets/images/blank-profile-picture.jpg'
import Timeline from '../Timeline/Timeline';

const experiences = [
    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

    {
        year: '2021',
        title: 'Frontend Developer',
        company: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // ... add more experiences
];
const Content = () => {
    return (
        <div className="text-white min-w-screen">
            <div className="py-4">
                <div className="container mx-auto flex items-center align-center justify-center my-10 flex-col">
                    {/* <p className='mx-10 mb-4 text-center'>What are you looking for here? Are you searching about me?<br />
                        Wow, I feel honored that you want to know about me. <br />Come on, I'll help you get to know me better.</p> */}
                    <img src={profile} alt="Profile" className="w-1/4 h-1/4 mr-2 rounded-full" />
                </div>
                <div className="container mx-auto flex items-center justify-center my-10">
                    <p className=''>"Even a small change, it's a step forward."</p>
                </div>
                <div className="container mx-auto flex items-center justify-between my-10">
                    <Timeline experiences={experiences} />

                </div>

            </div>
        </div>
    );
};

export default Content;