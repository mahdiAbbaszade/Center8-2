import React from 'react'
import { Link } from 'react-router-dom'
import LayoutAdmin from '../../layout/LayoutAdmin'

const AdminFolder = () => {
    return (
        <LayoutAdmin>
            <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
                <div className=''>
                    <p className='border border-2 fw-bold bg-info p-3 m-0'>
                        <span className='bg-primary bgprimary border-0 p-2 px-5 rounded'> پرونده جدید  </span>
                    </p>
                </div>
                <div className='border border-2 p-3 mt-2'>
                    <div className='col-6 col-md-6 col-lg-5 border border-2'>
                        <div className='m-0 w-100'>
                            <div className='d-flex justify-content-between border-bottom bg-info p-2'>
                                <p className='m-0 p-2 ms-auto fw-bold'>نوع درخواست :</p>
                                <p className='m-0 p-2 fw-bold'> درخواست تاسیس </p>
                            </div>
                            <div className='p-2'>
                                <p className='d-flex flex-column justify-content-around px-3 m-0'>
                                    <div>
                                        <span> تاریخ :</span>
                                        <span className=''>1401/10/10</span>
                                    </div>
                                    <div className='my-2'>
                                        <span>ساعت : </span><span>11:30</span>
                                    </div>
                                    <div className='my-1'>
                                        <span> کدپیگیری </span><span> 26-0611933 </span>
                                    </div>
                                </p>
                                <p className='d-flex justify-content-around bg-warning bg-opacity-50 rounded p-1 my-2'>
                                    <span>  وضعیت : </span>
                                    <span className='ms-4 '> درانتظار پذیرش </span>
                                </p>
                            </div>
                            <Link to="/AdminAccept" className='bg-success btn rounded-0 d-flex justify-content-center text-white text-bold text-center p-2 text-decoration-none'>
                                پذیرش درخواست
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminFolder