import React from 'react'
import { Link } from 'react-router-dom'
import LayoutColleague from '../../layout/LayoutColleague'

const ColleagueAccept2 = () => {
    return (
        <LayoutColleague>
            <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
                <div className='my-2 mb-1'>
                    <h5 className='bg-info fw-bold p-3 m-0'>
                        مشخصات ثبت شده درخواست کننده :
                    </h5>
                    <div className='d-flex flex-wrap py-2 px-3 m-0 my-2'>
                        <p className='border-bottom p-1 col-3 border'><span>نام :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>نام خانوادگی :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>نام پدر :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>نام پدر :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> شماره شناسنامه :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> کد ملی :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> تابعیت :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> محل تولد :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> وضعیت تاهل :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> وضعیت تحصیلی :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> وضعیت نظام وظیفه :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> وضعیت اشتغال :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> وضعیت جسمانی  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> کدپستی  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> شماره تلفن  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> پیش شماره  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> تلفن همراه  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> نام حرفه  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span> شماره استاندارد  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>  شماره گواهی نامه   :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>  شماره گواهینمامه   :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>  تاریخ صدور گواهی نامه   :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>  نمره کتبی  :</span><span> </span></p>
                        <p className='border-bottom p-1 col-3 border'><span>  نمره شفاهی  :</span><span> </span></p>
                    </div>
                    <div className=' p-2 my-2'>
                        <p className='p-2 bg-info fw-bold'>
                            عکس ها و اسناد آپلود شده
                        </p>
                        <div className='d-flex justify-content-around px-3'>
                            <p className='col-3 text-center p-5 bg-warning bg-opacity-50 m-1'>1</p>
                            <p className='col-3 text-center p-5 bg-warning bg-opacity-50 m-1'>2</p>
                            <p className='col-3 text-center p-5 bg-warning bg-opacity-50 m-1'>3</p>
                            <p className='col-3 text-center p-5 bg-warning bg-opacity-50 m-1'>4</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex border-top m-2 p-3'>
                    <Link to="/ColleagueOk2" className='fw-bold bg-opacity-75 bg-success btn m-1'> تایید درخواست </Link>
                    <Link to="/ColleagueCancel2" className='fw-bold bg-opacity-75 bg-danger btn m-1'> رد درخواست </Link>
                    <Link to="/Colleague" className='fw-bold bg-opacity-75 bg-info btn me-auto my-0'> بازگشت </Link>
                </div>
            </div>
        </LayoutColleague>
    )
}


export default ColleagueAccept2