import React from 'react'
import { useState } from 'react'


const Tabveiws2 = () => {
    const [count, setCount] = useState( 0 )

    return (
        <div className='justify-content-center my-3'>
            <div className='d-flex justify-content-between mx-5 mt-4 TabVeiw1'>
                <div className='d-flex flex-column align-items-center TabVeiw12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 0 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 ${count === 0 ? "active-1" : "deavtive-1"}`}> ثبت درخواست </span>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 1 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 ${count === 2 ? "active-1" : "deavtive-1"}`}> پاسخ کارشناس </span>
                </div>
            </div>
            {/* {
        count === 0 ? <div className='d-flex justify-content-center'>
            <div className=''>
                <button className='btn btn-success text-white' onClick={() => setCount( 1 )}>تایید و ادامه</button>
            </div>
        </div> : null
    }

    {
        count === 1 ? <div className='d-flex justify-content-center'>
            <button className='btn btn-info mx-1 text-white' onClick={() => setCount( 0 )}>مرحله قبل</button>
        </div> : null
    } */}
        </div>

    )
}
export default Tabveiws2;

