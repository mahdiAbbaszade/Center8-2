import React from 'react'
import { useState } from 'react'


const Tabveiws = ( { level } ) => {

    return (
        <div className='justify-content-center my-3'>
            <div className='d-flex justify-content-around mt-4 TabVeiw1'>
                <div className='d-flex flex-column align-items-center TabVeiw12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${level === 0 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${level === 0 ? "active-1" : "deavtive-1"}`}> انتخاب استاندارد </span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    
                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${level === 3 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${level === 3 ? "active-1" : "deavtive-1"}`}>  آپلود </span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${level === 4 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${level === 4 ? "active-1" : "deavtive-1"}`}> تایید توسط مرکز </span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${level === 5 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${level === 5 ? "active-1" : "deavtive-1"}`}> تایید نهایی و پرداخت  </span>
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
            <button className='btn btn-success mx-1 text-white' onClick={() => setCount( 2 )}>تایید و ادامه </button>
        </div> : null
    }
    {
        count === 2 ? <div className='d-flex justify-content-center'>
            <button className='btn btn-info mx-1 text-white' onClick={() => setCount( 1 )}>مرحله قبل</button>
        </div> : null
    } */}
        </div>

    )
}
export default Tabveiws;

