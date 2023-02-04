import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import HeaderEstablished from '../Established/headerEstablished'
import LayoutAdmin from '../layout/LayoutAdmin'
import Tabveiws from './TabVeiws'

const EzafeOkey = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <LayoutAdmin>
            <div>
                <div style={{ fontSize: "23px" }}>
                    <HeaderEstablished />
                </div>
                <div className="">
                    <Tabveiws />
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <div className='mt-5 f-check-confirmation text-center'>
                        <div className='border border-2 border-success py-4 px-5 mt-3 check-confirmation'>
                            <div className='px-5'>
                                <p className='text-white fw-bold m-0'>
                                    کاربر گرامی درخواست شما ثبت شد ؛کارشناسان در اسرع وقت به درخواست شما رسیدگی می کنند .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center fw-bold mb-5 mt-5 '>
                    {/* <p>
                        کاربر گرامی پس از پرداخت هزینه ثبت نام تعویض و تمدید گواهی نامه رسید پرداخت را در قسمت مربوطه آپلود نمایید
                    </p> */}
                </div>
                <div className='d-flex justify-content-center m-2 mb-5'>
                    <div className='mt-0 w-75 text-center'>
                        <div className='border border-1 bg-secondary bg-opacity-25 py-5 px-2 mt-1 '>
                            <div className='px-2 py-3 '>
                                <p className='fw-bold m-0 d-flex flex-column align-items-center'>
                                    {/* <button className='px-5 py-3 my-5 btn rounded-0 text-white bgprimary btn-outline-info border-0 w-auto'> پرداخت هزینه تاسیس</button> */}
                                </p>
                                <p className='bg-success text-white text-center p-3 my-4 mx-2'> درخواست شما با موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <Link className='text-danger' to="/Admin"> داشبورد </Link> می توانید پیگیری نمایید
                                </p>
                            </div>
                        </div>
                        {/* <p className='bg-success text-white text-center p-3 my-4 mx-2'> پرداخت شما با موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <span  className='text-danger'> داشبورد </span> می توانید پیگیری نمایید
                        </p> */}
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default EzafeOkey