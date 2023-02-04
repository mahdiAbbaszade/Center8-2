import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Arm4 from '../../img/logowhite.svg';


const LayoutAdmin = ( { children } ) => {
    const location = useLocation()

    console.log(location.pathname === "/Admin")
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
                        <span className='m-0 fw-bolder ms-2'> آموزشگاه ابن سینا  </span>      
                    </div>
                </div>
                <div className='col-9 col-md-8 col-lg-9 bgprimary border-0 d-flex justify-content-between align-items-center px-1 Left-header'>
                    <img className='m-1 mb-0' src={Arm4} alt='برند سازمان' />
                        <div  className='me-auto'>
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
                        <Link to="/Admin" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Admin' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-success">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>داشبورد</p></Link>
                        <Link to="/ProfileAdmin" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/ProfileAdmin' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-danger">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>پروفایل</p></Link>
                        <Link to="/Ezafereshte2" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Ezafereshte' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-warning">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>اضافه رشته یا حرفه</p></Link>
                        <Link to="/DarkhasteTaghier" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/DarkhasteTaghier' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>درخواست تغییر مکان</p></Link>
                        <Link to="/DarkhasteSHoab" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/DarkhasteSHoab' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-info">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <p className='py-2 w-100 border-bottom m-0'>درخواست شعب</p></Link>

                        <Link to="/Maliat" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Maliat' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-success">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>مالیات</p></Link>
                        <Link to="/DarkhasteGovahi" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/DarkhasteGovahi' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-danger">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0 LinkAdminp'>درخواست گواهی نامه معرفی به ادارات</p></Link>
                        <Link to="/Tamdid" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '/Tamdid' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>تمدید گواهی نامه</p></Link>
                        <Link to="#" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '#' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-success">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>کارت اعتباری</p></Link>
                        <Link to="#" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '#' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-warning">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>کارت آزمون</p></Link>
                        <Link to="#" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '#' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-info">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>نتایج آزمون</p></Link>
                        <Link to="#" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '#' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'>آزمون های ادواری</p></Link>

                        <Link to="#" className={`d-flex align-items-center LinkAdmin text-decoration-none pe-2 ps-3 rounded-start ${location.pathname === '#' && "LinkAdminActive"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svgOne border-start ms-2 ps-1 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>

                            <p className='py-2 w-100 border-bottom m-0'> بایگانی </p></Link>
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

export default LayoutAdmin