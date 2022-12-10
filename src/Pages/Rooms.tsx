import React, { Component } from 'react'
import homeicon from '../Assets/home.jpg'
import { useNavigate } from "react-router-dom";

type Props = {}

type State = {}

export default function Rooms() {
    const navigate = useNavigate();
    return (
        <div className='mb-10 w-full'>
            <div className='lg:mx-16 md:mx-10 sm:mx-8 mt-20'>
                <p className='uppercase font-bold text-xl'>6 Room Discovered</p>

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 mt-4'>
                    {/* ROOMS */}
                    <div onClick={() => navigate('/rooms/livingroom')} className='textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out '>
                        <div className='p-3'><img className='rounded-2xl' src={homeicon} alt="" /></div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase pb-3'>
                            <p>Living Room</p>
                        </div>
                    </div>
                    <div className="textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out">
                        <div className='p-3'>
                            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/late-night-concept-illustration_114360-2940.jpg?w=826&t=st=1670611112~exp=1670611712~hmac=f6ef086ab67ba31f0859a0d8cf13b2a2a6cd589c1f71ca6c39eb941961ef580d" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                            <p>Bed Room</p>
                        </div>
                    </div>
                    <div className="textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out">
                        <div className='p-3'>
                            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/work-progress-concept-illustration_114360-5241.jpg?w=826&t=st=1670610883~exp=1670611483~hmac=1793d9823db8b60b3456734db642e09e95e4cb973764cd23cfbaaea9747e88d6" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                            <p>Working Desk</p>
                        </div>
                    </div>
                    <div className="textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out">
                        <div className='p-3'>
                            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-salat-illustration_23-2149258807.jpg?t=st=1670610916~exp=1670611516~hmac=19151daecd200ca745da0c1a19daf7509c1bf44b13db51f01126f6d875e59795" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                            <p>Prayer Room</p>
                        </div>
                    </div>
                    <div className="textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out">
                        <div className='p-3'>
                            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/pastry-chef-concept-illustration_114360-12048.jpg?w=826&t=st=1670610680~exp=1670611280~hmac=5916ac99356dec8e89c1555b11e7e3f2037d5fd3e354baecb76f18a2b5733dc2" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                            <p>Kitchen</p>
                        </div>
                    </div>
                    <div className="textc bgl rounded-2xl hover:cursor-pointer hover:bg-[#829AD8] hover:text-white hover:transition-all hover:ease-in-out">
                        <div className='p-3'>
                            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=826&t=st=1670611012~exp=1670611612~hmac=494ff3417b11b60e5230337744b342fc705fff5310d655a8878c25581efe51c2" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                            <p>Reading Room</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}