import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { MdOutlineSupportAgent } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
import { GiComputerFan } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCheckupList } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div>
                    <br />
                    <br />
                </div>
            
                <div className=" container mx-auto px-5 md:py-5">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>We Care for You</h1>
                    <div class="h-1 w-20 bg-purple-500 rounded"></div>
                </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200  bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <MdOutlineSupportAgent size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>90 days One to One Exchange</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200  bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450  w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <FcSupport size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Full Years Warranty Covered</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450  w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <GiComputerFan  size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Professional Performance Test</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450  w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <TbTruckDelivery size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Lifetime Technical Support</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450  w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <TbCheckupList size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Free Warranty Check-up</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-purple-450  w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <LuPackageCheck size={25} />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Free On-Site Service within 10KM</h2>
                                <p className="leading-relaxed"> 
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track