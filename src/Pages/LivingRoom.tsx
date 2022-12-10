import React, { Component } from 'react'
import Fan from '../Components/Fan'
import Light from '../Components/Light'
import Bulb from '../Components/Light'

type Props = {}

type State = {}

export default function LivingRoom() {
  return (
    <div className='mb-10 pb-10 w-full'>
      <div className='lg:mx-16 md:mx-10 sm:mx-8 mt-20'>
        <p className='uppercase font-bold text-xl'>Living Room 6 Electronics Discovered</p>

        <p className='mt-4 mb-2'>Lights</p>

        <div className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-6' >
          {/* ROOMS */}
          <Light></Light>

        </div>

        <p className='mt-4 mb-2'>Lights</p>

        <div className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-6' >
          {/* ROOMS */}
          <Fan></Fan>
          <Fan></Fan>

        </div>


      </div>
    </div>
  )

}