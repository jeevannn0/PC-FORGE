import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>customer Review's</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-purple-400 '>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">The service is perfect, i would recommend them, they respond quicky and kindly.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-purple-500  font-medium title-font tracking-wider text-sm uppercase">Shaider</h2>
                                {/* <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p> */}
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D5635AQFmORYh4BXWnA/profile-framedphoto-shrink_400_400/0/1706510521013?e=1715839200&v=beta&t=rDoK7QU0p1oOBI9e6xtSN0sEO7HEOqhOvAZyNjIPfUA" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">I requested a quote from this company and I received a whole custom build quote the very next day. The price is unmatched and so is the quality. The PC took less than a week to build and it’s been working wonders for me. If anyone is looking to get a PC, this place is definitely it.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-purple-500  font-medium title-font tracking-wider text-sm uppercase">Ali Quadri</h2>
                                {/* <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p> */}
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D5603AQE0g4vhru2WTQ/profile-displayphoto-shrink_200_200/0/1670512575344?e=1718236800&v=beta&t=eilo_9w4pci7-uNA-2r0o_0mfIHwEPZ0IN8ZdN4XDLA" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Purchased a gaming PC in Jan 2020. Pricing was competitive and final product was great and was delivered to my door. All expectations exceeded. Nice guy too. Highly recommend!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-purple-500 font-medium title-font tracking-wider text-sm uppercase">Rich O'Hanlon</h2>
                                {/* <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial