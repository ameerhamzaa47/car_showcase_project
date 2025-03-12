"use client"
import React from 'react'
import { useState } from 'react';

const page = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    return (
        <>

            <section className='bg-gray-100 text-black rounded-2xl flex flex-col lg:flex-row md:flex-col justify-between items-center mx-10 my-10 p-8 gap-9'>
                <div className=' mb-10 text-center md:text-left'>
                    <h3 className='font-semibold text-gray-500 tracking-wide'>PRICING PLANS</h3>
                    <h1 className='text-4xl md:text-3xl font-bold leading-tight mt-2'>Explore Our Pricing Plan Solutions</h1>
                    <p className=' text-lg md:text-base mt-4 max-w-lg mx-auto md:mx-0'>Discover pricing options designed to accommodate practices of all sizes.</p>

                    <div className="flex justify-center items-center gap-4 mt-8">
                        <p className={`cursor-pointer text-lg font-semibold ${isMonthly ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`} onClick={() => setIsMonthly(true)}>Monthly</p>
                        <div className={`relative flex items-center w-20 h-9 bg-gray-300 rounded-full cursor-pointer ${isMonthly ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={handleToggle}>
                            <div className={`absolute w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${isMonthly ? 'translate-x-1' : 'translate-x-11'}`} />
                        </div>
                        <p className={`cursor-pointer text-lg font-semibold ${!isMonthly ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`} onClick={() => setIsMonthly(false)}>Annually</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#22303D]  to-[#2D3E50] text-white p-6 rounded-lg shadow-lg flex flex-col w-80 justify-between transform transition-transform hover:scale-105">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Standard Plan</h3>
                        <p className="text-gray-300 mb-4">Best for small Family</p>
                        <p className="text-white text-4xl mb-4">{isMonthly?'$99':'$199'}<span className='text-base -ml-1'> / {isMonthly?'month':'year'}</span></p>
                        <hr className="border-gray-600 mb-4" />
                        <ul className="mb-6 space-y-2">
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Best Practice</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Experience</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Repair</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Fuel</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Gas</li>
                        </ul>
                    </div>
                    <button className="cursor-pointer w-full bg-[#22303D] border border-white hover:bg-white hover:text-[#22303D] hover:transition-all text-white py-2 rounded-lg mt-auto flex items-center justify-center">
                        Choose Plan <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>


                <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-8 rounded-xl shadow-2xl flex flex-col w-80 justify-between transform transition-transform hover:scale-105 hover:shadow-lg">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                        <p className="text-[#e0f7fa] mb-4">Best for Large Family</p>
                        <p className="text-white text-5xl mb-4">{isMonthly? '$199':'$279'}<span className='text-lg -ml-1'> / {isMonthly? 'month':'year'}</span></p>
                        <hr className="border-gray-300 mb-4" />
                        <ul className="mb-6 space-y-3">
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Best Practice</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Experience</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Repair</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Fuel</li>
                            <li className="flex items-center"><i className="fa-solid fa-check mr-2"></i> Gas</li>
                        </ul>
                    </div>
                    <button className="cursor-pointer w-full bg-white border border-blue-500 text-blue-500 hover:text-blue-700 hover:font-semibold transition-all py-3 rounded-lg mt-auto flex items-center justify-center">
                        Choose Plan <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>

            </section>
        </>
    )
}

export default page
