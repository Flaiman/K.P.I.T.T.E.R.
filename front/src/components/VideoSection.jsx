import React from 'react';
import { assets } from "../assets/assets.js";

const CreativeVideoSection = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-orange-800 via-brown-900 to-black rounded-2xl px-6 sm:px-8 md:px-14 lg:px-24 mt-48 shadow-xl relative overflow-hidden">
                {/* Left side */}
                <div className="md:w-1/2 flex flex-col items-start justify-center py-6 sm:py-10 md:py-14 z-10">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-500 font-bold leading-tight">
                    JOIN THE MERCENARIES
                    </p>
                    <div className="flex flex-col items-start gap-4 text-white text-sm sm:text-base font-light">
                        <p className="leading-relaxed text-xl">
                        Help others, don't depend on anyone, get rewarded.
                        </p>
                        <p className="italic text-white/80 text-xs sm:text-sm">
                            "In the Zone, there are no friends, but information is your greatest ally."
                        </p>
                        <p></p>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-2 sm:gap-3 bg-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-gray-800 shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300"
                    >
                        JOIN
                    </a>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 relative flex justify-center items-center">
                    <div className="relative w-full h-auto sm:h-64 md:h-auto rounded-lg overflow-hidden">
                        <img src={assets.attack} alt="attack" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeVideoSection;
