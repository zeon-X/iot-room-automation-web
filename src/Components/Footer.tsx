import React, { Component } from 'react'

type Props = {}

type State = {}


export default class Footer extends Component<Props, State> {
    state = {}

    render() {
        return (
            <footer className='bgl py-16 lg:px-16 md:px-8 sm:px-6'>
                <div className='max-w-screen-2xl mx-auto flex lg:flex-row md:flex-row sm:flex-col '>


                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6'>
                        <div className='text-gray-400'>
                            <p className='font-bold text-lg textc uppercase'>Find Us</p>
                            <div className='border-b border-gray-400 w-10/12 mb-4'>
                                <div className='w-3/12 border border-[#6171A2]'></div>
                            </div>
                            <p className='text-bold text-black'>Address</p>
                            <p>KA 96/1, Kazibari</p>
                            <p>Kuril, Dhaka 1229</p>
                            <p className='text-bold text-black'>Contact</p>
                            <p>+880 1825 930 641</p>
                            <p>+880 1402 199 906</p>
                        </div>
                        <div className='text-gray-400'>
                            <p className='font-bold text-lg textc uppercase'>About This Site</p>
                            <div className='border-b border-gray-400 w-10/12 mb-4'>
                                <div className='w-3/12 border border-[#6171A2]'></div>
                            </div>
                            <p>Welcome to Aleeha Technologies. We provide software solutions to enterprises.</p>
                        </div>
                        <div className='text-gray-400'>
                            <p className='font-bold text-lg textc uppercase'>Recent Posts</p>
                            <div className='border-b border-gray-400 w-10/12 mb-4'>
                                <div className='w-3/12 border border-[#6171A2]'></div>
                            </div>
                            <p>Welcome to Aleeha Technologies. We provide software solutions to enterprises.</p>
                        </div>
                        <div className='text-gray-400'>
                            <p className='font-bold text-lg textc uppercase'>Search</p>
                            <div className='border-b border-gray-400 w-10/12 mb-4'>
                                <div className='w-3/12 border border-[#6171A2]'></div>
                            </div>
                            <p>Welcome to Aleeha Technologies. We provide software solutions to enterprises.</p>
                        </div>
                    </div>

                </div>
                <div className='border-t border-gray-300 mt-6'>
                    <div className='max-w-screen-2xl mx-auto flex lg:flex-row sm:flex-col md:flex-col gap-2 justify-between items-center mt-10 textc'>
                        <div className='flex'>
                            <p>Aleeha Tech</p>
                            <p className='mx-4'>Contact</p>
                            <p>Blog</p>
                        </div>
                        <div><p className='text-center'>Copyright © 2023 - Aleeha Technologies </p></div>
                    </div>
                </div>
            </footer >
        )
    }
}