import React from 'react';
import { assets } from "../assets/assets.js";

const About = () => {
    return (
        <div>
            {/* About Section Header */}
            <div className="text-4xl text-center font-extrabold pt-10 pb-4 text-white">
                About <span className="bg-gradient-to-r from-cyan-500 to-blue-900 bg-clip-text text-transparent">K.P.I.<span className='tracking-wider'>T.T.</span>E.R.</span>
            </div>
            {/* Main About Section */}
            <div className="my-12 flex flex-col gap-16 px-6 lg:px-20">
                <img
                    className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    src={assets.about}
                    alt="About image"
                />
                <div className="flex flex-col justify-center gap-8 text-lg leading-relaxed text-gray-300">
                    <p>
                    <span className="text-cyan-500">K.P.I.<span className='tracking-wider'>T.T.</span>E.R.</span> is a platform designed for stalkers, explorers, and survivors in the Zone, 
                    providing a space to share important news, discoveries, and experiences. It serves as a vital communication hub 
                    where the most up-to-date information about anomalies, artifacts, and mutant sightings can be exchanged.
                    </p>
                    <p>
                    Whether you’re searching for rare items or need to connect with others for survival, <span className="text-cyan-500">K.P.I.<span className='tracking-wider'>T.T.</span>E.R.</span> keeps 
                    you informed and connected in a dangerous and unpredictable world.
                    </p>
                </div>
            </div>
            {/* Why KPItter Section */}
            <div className="py-12 pb-24 bg-gradient-to-b from-amber-800 to-brown-800 text-white rounded-lg shadow-lg">
                <h2 className="text-4xl text-center font-extrabold pb-8">WHY <span className="text-yellow-500">K.P.I.T.T.E.R.?</span></h2>
                <div className="flex flex-col md:flex-row gap-12 items-center px-6 lg:px-10">
                    <img
                        className="w-full md:max-w-[450px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        src={assets.about2}
                        alt="Why KPItter image"
                    />
                    <div className="flex flex-col gap-6 text-lg leading-relaxed">
                        <p>
                        <span className='text-yellow-500'>K.P.I.T.T.E.R.</span> offers more than just a place to share news—it's a critical tool for anyone navigating the 
                        unpredictable world of the Zone. Whether you're a stalker, an explorer, or a survivor, <span className='text-yellow-500'> K.P.I.T.T.E.R.</span> is here
                        to help you stay informed, connected, and prepared for anything the Zone throws at you.
                        </p>
                        <p>
                        <span className='text-sky-500'>K.P.I.T.T.E.R.</span> is the ultimate tool for surviving and thriving in the Zone. Whether you’re looking for crucial
                         updates, seeking new allies, or just trying to stay safe, <span className='text-sky-500'>K.P.I.T.T.E.R.</span> has your back.
                        </p>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="my-16 flex flex-col md:flex-row gap-10 px-6 lg:px-0 text-gray-300">
                {[
                    {
                        title: "Real-Time Updates",
                        number: "1",
                        description:
                            "Stay ahead of the dangers in the Zone with up-to-the-minute news and alerts. Whether it's the appearance of a new anomaly or a sudden mutant invasion, K.P.I.T.T.E.R. ensures you're always in the loop.",
                    },
                    {
                        title: "Connect with Fellow Survivors",
                        number: "2",
                        description:
                            "Whether you're looking for a team to explore dangerous zones or simply want to share your latest findings, K.P.I.T.T.E.R. connects you with like-minded survivors. The Zone is tough, but together, we’re stronger.",
                    },
                    {
                        title: "Reliable Information",
                        number: "3",
                        description:
                            "In a world full of rumors and uncertainty, K.P.I.T.T.E.R. offers a trusted space for verified news. With contributions from experienced stalkers and experts, you can count on the platform to provide the insights you need to navigate the Zone safely.",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-out"
                    >
                        <p className='text-9xl font-custom text-amber-600'>{feature.number}</p>
                        <b className="text-2xl text-yellow-600">{feature.title}</b>
                        <p className="text-lg leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
