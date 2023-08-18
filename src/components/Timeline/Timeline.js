import React, { useState } from 'react';
import './style.css';

const Timeline = ({ experiences }) => {
    const [visibleExperiences, setVisibleExperiences] = useState(3);
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setVisibleExperiences(visibleExperiences + 3);
        setShowAll(true);
    };

    const handleShowLess = () => {
        setVisibleExperiences(3);
        setShowAll(false);
    };

    return (
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {experiences.slice(0, showAll ? experiences.length : visibleExperiences).map((experience, index) => (
                <React.Fragment key={index}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="col-span-4 w-auto h-auto">
                                <div className="w-full h-full card-component rounded-2xl p-2 md:pl-4">
                                    <h1 className="text-xl font-medium py-1">{experience.company}</h1>
                                    <p className="text-md font-medium py-1">{experience.title}</p>
                                    <p className="sm:text-sm text-xs">{experience.description}</p>
                                    <h1 className="sm:text-sm text-xs">{experience.year}</h1>
                                </div>
                            </div>
                            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 line-component"></div>
                                <div className="absolute w-4 h-4 rounded-full line-component z-10 text-white text-center"></div>
                            </div>
                            <div className="col-span-4 w-full h-full"></div>
                        </>
                    ) : (
                        <>
                            <div className="col-span-4 w-full h-full"></div>
                            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 line-component"></div>
                                <div className="absolute w-4 h-4 rounded-full line-component z-10 text-center"></div>
                            </div>
                            <div className="col-span-4 w-auto h-auto">
                                <div className="w-full h-full card-component rounded-2xl p-2 md:pl-4">
                                    <h1 className="text-xl font-medium py-1">{experience.company}</h1>
                                    <p className="text-md font-medium py-1">{experience.title}</p>
                                    <p className="sm:text-sm text-xs">{experience.description}</p>
                                    <h1 className="sm:text-sm text-xs">{experience.year}</h1>
                                </div>
                            </div>
                        </>
                    )}
                </React.Fragment>
            ))}
            <div className="col-span-9 flex justify-center mt-4">
                {showAll ? (
                    <button
                        className="card-component px-4 py-2 rounded-xl"
                        onClick={handleShowLess}
                    >
                        Show Less
                    </button>
                ) : (
                    <button
                        className="card-component px-4 py-2 rounded-xl"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Timeline;
