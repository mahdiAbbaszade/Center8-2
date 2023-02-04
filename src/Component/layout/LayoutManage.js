import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Arm4 from '../../img/logowhite.svg';

const LayoutManage = ( { children } ) => {

    const location = useLocation()

    return (
        <div className='container-fluid bg-light p-0 admin-main'>
            {/* header */}
            <div className=' d-flex headerAdmin'>
                <div className='col-3 col-md-4 col-lg-3 d-flex bgprimary border-0 align-items-center p-2 border-start Right-header'>
                    <span className='rounded bg-secondary border text-white border-2 border-white p-1 ms-3 me-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='svgUser' fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </span>
                    <div className='me-0 text-white'>
                        <span className='m-0 fw-bolder ms-2'> آقای زمانی </span>
                    </div>
                </div>
                <div className='col-9 col-md-8 col-lg-9 bgprimary border-0 d-flex justify-content-between align-items-center px-1 Left-header'>
                    <img className='m-1 mb-0' src={Arm4} alt='برند سازمان' />
                    <div className='me-auto'>
                        <form className='d-flex align-items-center form-control bg-transparent border-0'>
                            <input type="search" className='form-control p-1' placeholder='جستجو' />
                            <button className='border-0 bg-transparent'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-white mx-2'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <Link to="#" className=' text-text-decoration-none my-auto mx-3'>
                        <p className='text-white m-0 '>
                            <svg xmlns="http://www.w3.org/2000/svg" className='svgInbox' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </p>
                    </Link>
                </div>
            </div>
            {/* body */}
            {/* right sidebar */}
            <div className='container-fluid d-flex bg-white p-0 m-0'>
                <div className='col-3 col-md-4 col-lg-3 Right-Admin'>
                    <ul className='list-unstyled d-flex flex-column ps-2'>
                        <Link to="/Manage" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Manage' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-success">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>داشبورد</p></Link>

                        <Link to="/ProfileManage" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/ProfileManage' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-warning">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <p className='py-2 w-100 border-bottom m-0'>پروفایل</p></Link>

                        <Link to="/Archive2" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Archive' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'> بایگانی </p></Link>
                        <Link to="/KHabarManage" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Archive' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <p className='py-2 w-100 border-bottom m-0'> اخبار و اطلاعیه </p></Link>

                        <Link to="/" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-danger">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                            <p className='py-2 w-100 border-bottom m-0'>خروج</p></Link>
                    </ul>
                </div>
                {/* left */}
                <div className='col-9 col-md-8 col-lg-9 bg-light Left-Admin'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutManage