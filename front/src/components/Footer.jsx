import React from 'react';
import { assets } from "../assets/assets.js";

const Footer = () => {
    return (
        <div className='bg-[url(https://www.stalker2.com/stalker2/footer-bg.jpg)] bg-cover bg-no-repeat bg-center px-5 lg:pt-0 lg:pb-0 lg:px-20'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-5 lg:gap-14 my-10 lg:mt-40 text-sm pt-10'>
                <div>
                    <p className='font-custom text-5xl tracking-wide bg-gradient-to-r from-yellow-500 to-yellow-900 bg-clip-text text-transparent'>K.P.I.T.T.E.R.</p>
                    <p className='w-full md:w-2/3 text-white'>K.P.I.T.T.E.R. is a hub for stalkers, explorers, and survivors to exchange vital news,
                     observations, and discoveries about the Zone. It’s a gathering place for those living and working on the edge of the unknown.
                     K.P.I.T.T.E.R. brings together everyone who seeks to survive and thrive in the unpredictable world of the Zone. 
                     Information here isn’t just knowledge—it’s a lifeline.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 text-yellow-500'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 text-yellow-500'>CONTACT WITH US</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li>096 002 99 07</li>
                        <li>mrflaiman@gmail.com</li>
                    </ul>
                    <div className='flex gap-3 mt-5'>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                            aria-label="Instagram" className='group'>
                            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 focus:outline-none filtered opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                            aria-label="Facebook" className='group'>
                            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 focus:outline-none filtered opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                            aria-label="X (Twitter)" className='group'>
                            <img src={assets.twitter} alt="X (Twitter)" className="w-6 h-6 focus:outline-none filtered opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-m text-center text-white'>© 2024 KPItter</p>
            </div>
        </div>
    );
};

export default Footer;
