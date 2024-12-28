import React from 'react';
import { assets } from "../assets/assets.js";

const BestPosts = () => {
    const posts = [
        {
            title: "The Ferris wheel's radiation levels are through the roof",
            author: "Strelok",
            image: assets.art1,
            description: "Radiation levels around the iconic Ferris wheel have reached critical levels. Only the most daring stalkers will venture into this dangerous zone.",
        },
        {
            title: "BLOODSUCKER INVASION",
            author: "Skif",
            image: assets.art2,
            description: "Reports indicate a mass appearance of bloodsuckers near local settlements. Stalkers are warned: avoid the area and proceed with extreme caution!",
        },
        {
            title: "An anomaly has been detected near the swamp",
            author: "Scar",
            image: assets.art3,
            description: "A new anomaly has appeared in the swamps. Scientists are assembling a team to study the phenomenon, while stalkers discuss its potential for rare loot.",
        },
    ];

    return (
        <div id='posts'>
            {/* Best Posts Section Header */}
            <div className="text-4xl text-center font-extrabold pt-10 pb-4 text-white my-20">
                Latest <span className="text-main">Z.O.N.E. </span>News
            </div>
            {/* Best Posts Cards */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 ease-out"

                    >
                        <img
                            src={post.image}
                            alt={`${post.title} image`}
                            className="w-full h-[250px] object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">{post.title}</h3>
                            <p className="text-lg text-gray-300 mb-6">{post.description}</p>
                            <div className="text-sm font-medium text-gray-400">
                                By <span className="text-main">{post.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestPosts;