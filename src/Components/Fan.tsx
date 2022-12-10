import React, { Component, useState } from 'react'

type Props = {}

type State = {}

export default function Fan() {
    const [status, setStatus] = useState(false);
    const handleChangeStatus = (status: boolean) => {
        setStatus(!status);
    }
    return (

        <div className={status ? "text-white rounded-2xl bg-[#829AD8]" : "textc bgl rounded-2xl"}>
            <div className='m-3 lg:p-6 md:p-2 sm:p-2 bg-white rounded-2xl'>
                <img className='rounded-2xl' src="https://cdn-icons-png.flaticon.com/512/1753/1753744.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                <p className='mb-2'>Fan 01</p>
                <input onClick={() => {
                    handleChangeStatus(status)
                }} type="checkbox" className="toggle" checked={status ? true : false} />
            </div>
        </div>

    )
}