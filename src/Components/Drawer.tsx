import React, { Component } from 'react'
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

type Props = {}

type State = {}

export function Drawer({ children, }: { children: React.ReactNode | React.ReactNode; }) {
    const navigate = useNavigate();
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-white ">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bgl py-10 lg:px-16 md:px-4 sm:px-2">
                    <div className='max-w-screen-2xl w-full mx-auto'>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div onClick={() => navigate('/#home')} className="flex-1 px-2 mx-2 textc text-lg uppercase hover:cursor-pointer ">
                            Aleeha Smart Home
                        </div>
                        <div className="flex-none hidden lg:block">
                            <div className='flex justify-end textc'>
                                <a onClick={() => navigate('/#home')} className="hover:cursor-pointer hover:text-[#0e1731] ">Home</a>
                                <a onClick={() => navigate('/rooms')} className="hover:cursor-pointer hover:text-[#0e1731] ml-4">Rooms</a>
                                <a onClick={() => navigate('/#about')} className="hover:cursor-pointer hover:text-[#0e1731] ml-4">About</a>
                                <a onClick={() => navigate('/#help')} className="hover:cursor-pointer hover:text-[#0e1731] ml-4">Help</a>
                                <a onClick={() => navigate('/#contact')} className="hover:cursor-pointer hover:text-[#0e1731] ml-4">Contact</a>
                            </div>
                        </div></div>
                </div>
                {/* <!-- Page content here --> */}
                <div className='max-w-screen-2xl mx-auto'>{children}</div>
                <Footer></Footer>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}

                    <li className='mb-0 text-xl'><a>Aleeha Smart Home</a></li>
                    <li><a onClick={() => navigate('/#home')}>Home</a></li>
                    <li><a onClick={() => navigate('/rooms')}>Rooms</a></li>
                    <li><a onClick={() => navigate('/#about')}>About</a></li>
                    <li><a onClick={() => navigate('/#help')}>Help</a></li>
                    <li><a onClick={() => navigate('/#contact')}>Contact</a></li>

                </ul>

            </div>
        </div>
    )
}
