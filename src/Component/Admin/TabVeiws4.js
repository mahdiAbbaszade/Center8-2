import React from 'react'
import { useState } from 'react'


const TabVeiws4 = () => {
    const [count, setCount] = useState( 0 )

    return (
        <div className='justify-content-center my-4 mx-4'>
            <div className='d-flex justify-content-around mt-4 TabVeiw1'>
                <div className='d-flex flex-column align-items-center TabVeiw12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 0 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${count === 0 ? "active-1" : "deavtive-1"}`}>ثبت درخواست و آپلود مدارک</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 1 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${count === 1 ? "active-1" : "deavtive-1"}`}> تایید کارشناس و پرداخت</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>

                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 2 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${count === 2 ? "active-1" : "deavtive-1"}`}>دریافت اطلاعات آزمون</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>


                    <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 3 ? "active22" : "deactive22"}`}></span>
                    <span className={`my-3 px-4 text-center ${count === 3 ? "active-1" : "deavtive-1"}`}>نتایج آزمون و پرداخت هزینه صدور گواهی</span>
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
            <button className='btn btn-success mx-1 text-white' onClick={() => setCount( 3 )}>تایید و ادامه </button>
        </div> : null
    }
    {
        count === 3 ? <div className='d-flex justify-content-center'>
            <button className='btn btn-info mx-1 text-white' onClick={() => setCount( 2 )}>مرحله قبل</button>
        </div> : null
    } */}

        </div>

    )
}


export default TabVeiws4;

