import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'

type Props = {}

type State = {}

export default function Light() {
    const [lightstatus, setlightStatus] = useState(false);
    const [ip, setIP] = useState("");
    //ip fecthing
    useEffect(() => {
        let fetchedip = localStorage.getItem("ip");
        if (fetchedip) setIP(fetchedip);
    }, []);

    const handleChangeStatus = (lightstatus: boolean) => {
        if (ip.length != 0) {
            if (!lightstatus) {
                //when off turn on
                fetch(`http://${ip}/livingroomled1on`,
                    {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'omit', // include, *same-origin, omit

                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'

                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

                    }
                );
            }
            else {
                //when on turn off
                fetch(`http://${ip}/livingroomled1off`,
                    {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'omit', // include, *same-origin, omit

                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'

                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

                    }
                );
            }
            // change status
            setlightStatus(!lightstatus);
        }
        else {
            // set ip first
            console.error("No ip");

        }

    }
    return (

        <div className={lightstatus ? "text-white rounded-2xl bg-[#829AD8]" : "textc bgl rounded-2xl"}>
            <div className='m-3 lg:p-6 md:p-2 sm:p-2 bg-white rounded-2xl'>
                <img className='rounded-2xl' src="https://cdn-icons-png.flaticon.com/512/2987/2987996.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center font-bold uppercase  pb-3'>
                <p className='mb-2'>Light 01</p>
                <input onClick={() => {
                    handleChangeStatus(lightstatus)
                }} type="checkbox" className="toggle" checked={lightstatus ? true : false} />
            </div>
        </div>

    )

}