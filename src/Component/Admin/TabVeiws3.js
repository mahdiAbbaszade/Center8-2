import React from 'react'
import { useState } from 'react'


const Tabveiws3 = () => {
    const [count, setCount] = useState( 0 )

return(
<div className='justify-content-center my-3'>
    <div className='d-flex justify-content-around mt-4'>
        <div className='d-flex flex-column align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
            </svg>
            <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 0 ? "active22" : "deactive22"}`}></span>
            <span className={`my-3 ${count === 0 ? "active-1" : "deavtive-1"}`}>ثبت نام و انتخاب پلن </span>
        </div>
        <div className='d-flex flex-column align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

            <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 1 ? "active22" : "deactive22"}`}></span>
            <span className={`my-3 ${count === 1 ? "active-1" : "deavtive-1"}`}>تماس پشتیبان با دانش آموز</span>
        </div>
        <div className='d-flex flex-column align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 2 ? "active22" : "deactive22"}`}></span>
            <span className={`my-3 ${count === 2 ? "active-1" : "deavtive-1"}`}> شروع برنامه ریزی و رسیدن به هدف </span>
        </div>
            <div className='d-flex flex-column align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border p-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>

                <span className={`mx-5 mt-3 d-flex p-2 rounded-circle btn-outline-light ${count === 3 ? "active22" : "deactive22"}`}></span>
                <span className={`my-3 ${count === 3 ? "active-1" : "deavtive-1"}`}>اختصاص پشتیبان به دانش آموز  </span>
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
export default Tabveiws3;

