import React, { Component, useEffect, useState } from 'react'
import hero1img from '../Assets/hero.jpg'
import hero2img from '../Assets/hero2.jpg'
import hero3img from '../Assets/hero3.webp'
import pcimg from '../Assets/pc.jpg'

type Props = {}

type State = {}

export default function LandingPage() {
    const [ip, setIP] = useState("");
    useEffect(() => {
        let fetchedip = localStorage.getItem("ip");
        if (fetchedip) setIP(fetchedip);
    }, []);
    const handleIPChange = (event: any) => {
        setIP(event.target.value);

    }
    const handleIPsubmit = () => {
        localStorage.setItem("ip", ip);
    }
    console.log(ip);

    return (
        <div className='mb-10'>
            <section className='lg:mx-16 md:mx-4 sm:mx-2 mt-20'>
                <div className='flex lg:flex-row md:flex-row sm:flex-col gap-6 justify-between items-center '>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-full lg:order-1 sm:order-2 flex flex-col lg:items-start md:items-start sm:items-center '>
                        <p className='lg:text-4xl sm:text-3xl font-light uppercase text-gray-500 mb-1'>Get Introduced..</p>
                        <p className='lg:text-7xl sm:text-5xl font-bold uppercase textc'>Automated</p>
                        <p className='lg:text-6xl sm:text-5xl font-bold uppercase '>Smart Home</p>
                        <p className='text-sm mt-6 mb-2 lg:text-start sm:text-center text-gray-500'>A smart home refers to a convenient home setup where appliances and devices can be automatically controlled remotely from anywhere with an internet connection using a mobile or other networked device. </p>
                        <p className='text-sm mb-6  lg:text-start sm:text-center text-gray-500'>Devices in a smart home are interconnected through the internet, allowing the user to control functions such as security access to the home, temperature, lighting, and a home theater remotely. </p>
                        <button className='bgc hover:bg-white border border-[#6171A2] hover:text-[#6171A2] hover:transition-all hover:ease-in-out py-3 px-6 text-white font-bold rounded'>Start A Tour</button>
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-full flex lg:justify-end md:justify-end sm:justify-center items-center lg:order-2 sm:order-1'>
                        <img className='lg:w-11/12 sm:w-[300px]' src={hero1img} alt="" />
                    </div>

                </div>
            </section>
            <section className='lg:mx-16 md:mx-4 sm:mx-2  mt-16'>
                <div className='bgl m-auto rounded-xl lg:px-20 md:px-20 sm:px-10 py-10'>
                    <p className='mb-2'>Insert Your esp8266 IP Address</p>
                    <div className='bg-white rounded-xl flex lg:flex-row md:flex-row sm:flex-col gap-6 p-5'>
                        <input onChange={(event) => { handleIPChange(event) }} value={ip} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button onClick={handleIPsubmit} className='btn bgl border border-none textc'>Submit</button>
                    </div>

                </div>
            </section >

            <section className='lg:mx-16 md:mx-8 sm:mx-8  mt-16'>
                <div className='flex lg:flex-row md:flex-row sm:flex-col gap-6 items-center justify-between'>
                    <div className='lg:w-1/2 sm:w-full md:w-full'>
                        <img className='lg:w-auto sm:w-[380px]' src={hero2img} alt="" />
                    </div>
                    <div className='lg:w-1/2 sm:w-full md:w-full flex flex-col lg:items-start md:items-start sm:items-center'>
                        <p className='lg:text-4xl sm:text-5xl  font-light uppercase text-gray-500 mb-1'>Control</p>
                        <p className='lg:text-7xl sm:text-5xl  font-bold uppercase textc'>Your Home</p>
                        <p className='lg:text-lg sm:text-2xl text-gray-500'>From any Location</p>
                        <p className='uppercase mb-3 mt-6 font-bold w-full text-start'>Key Takeaways</p>
                        <ul className='text-gray-500 text-sm list-disc'>
                            <li>
                                A smart home allows homeowners to control appliances, thermostats, lights, and other devices remotely using a smartphone or tablet through an internet connection.
                            </li>
                            <li>Smart homes can be set up through wireless or hardwired systems.</li>
                            <li>Smart home technology provides homeowners with convenience and cost savings.</li>
                            <li>Security risks and bugs continue to plague makers and users of smart home technology.</li>
                            <li>
                                Though full-scale home automation may cost thousands of dollars, smaller individual products costing less than $100 can get homeowners started on smart home products.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )

}