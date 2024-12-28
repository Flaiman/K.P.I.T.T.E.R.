import React from 'react';
import { assets } from "../assets/assets.js";

const Header = () => {
    return (
        <div>
            <div class="flex flex-col md:flex-row flex-wrap bg-gradient-to-t from-orange-300 via-brown-900 to-black rounded-2xl px-8 md:px-14 lg:px-10 mt-28 shadow-lg">
                {/* Left side */}
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[6vw]">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight md:leading-tight lg:leading-tight">
                        <span className='font-bold'>GREETINGS, STALKER</span>
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-white text-base font-light">
                        <p className="leading-relaxed font-normal">
                            Discover the volatile Chornobyl Exclusion Zone, full of dangerous mutants, warring factions, 
                            deadly anomalies and artifacts of incredible value. 
                            The reward is extremely high, but the price for it may be greater than life itself. 
                            K.P.I.T.T.E.R. is a hub for stalkers, explorers, and survivors to exchange vital news, observations, and discoveries about the Zone.
                        </p>
                    </div>
                    <a
                        href="#posts"
                        className="flex items-center gap-3 bg-white px-8 py-3 rounded-full text-sm font-semibold text-gray-800 shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300"
                    >
                        CHECK Z.O.N.E. NEWS
                        <img src={assets.arrow_icon} alt="" className="w-5" />
                    </a>
                </div>
                {/* Right side */}
                <div className="md:w-1/2 relative flex justify-end">
                    <img
                        className="w-full h-auto md:absolute bottom-0"
                        src={assets.trio}
                        alt="Header image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
