import React, { useEffect } from 'react'
import LayoutAdmin from '../layout/LayoutAdmin'
import { Link } from "react-router-dom";
import HeaderEstablished from '../Established/headerEstablished';
import Tabveiws from './TabVeiws';
import { useState } from 'react';
import EzafeOkey from './EzafeOkey';

const EzafereshteUpload = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    const [level, setLevel] = useState( 0 )
    return (
        <>
            {/* <div className="">
                <div style={{ fontSize: "20px" }}>
                    <HeaderEstablished />
                </div>
            </div> */}
            {/* <div className="">
                <Tabveiws level={level} />
            </div> */}
            {
                // level === 0 ?
                <div>
                    <div className='d-flex justify-content-center my-2'>
                        <div className='mt-5 f-check-confirmation w-75 text-center'>
                            <div className='border border-2 border-success py-4 px-3 mt-5 check-confirmation1'>
                                <div className='px-2'>
                                    <p className='text-success fw-bold m-0'>
                                        <h5 className='text-success bg-danger p-3 fw-bold m-0 text-white shadow2'> برای انتخاب استاندارد دکمه زیر را بزنید </h5>
                                        <br />
                                        <a className='text-decoration-none btn btn-primary text-white fw-bold px-3 shadow' href='https://rpc.irantvto.ir/home/standard-groups/main' target="_blank"> کلیک کنید </a>
                                    </p>
                                    <br />
                                    <h6 className='fw-bold m-0 text-primary'> ( و برای آپلود از قسمت پایین، فرم استاندارد خود را آپلود کنید ) </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center fw-bold mb-5 mt-2'>
                        {/* <p>
                    کاربر گرامی پس از پرداخت هزینه ثبت نام تعویض و تمدید گواهی نامه رسید پرداخت را در قسمت مربوطه آپلود نمایید
                </p> */}
                    </div>
                    <div className='d-flex justify-content-center m-2'>
                        <div className='mt-0 w-75 text-center'>
                            <div className='border border-1 bg-secondary bg-opacity-25 py-5 px-2 mt-1 '>
                                <div className='px-2 py-3'>
                                    <p className='fw-bold m-0 d-flex flex-column align-items-center'>
                                        <input type="file" className='me-lg-5 pe-lg-5 me-md-3 pe-md-3 pe-2 me-3 mb-5' />
                                        <span className='px-5 py-3 bg-primary bgprimary border-0 w-auto'>آپلود استاندارد ها</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <div className='mb-4'>

                            <Link to="/EzafeOkey" className="btn btn-success rounded-0 px-4 py-2 btn-establish">
                                ثبت درخواست
                            </Link>
                        </div>
                        <p className='bg-success text-white text-center p-3 mb-4 mx-5'> ثبت درخواست شما با موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <span to="/َProfileAdmin" className='text-danger'> داشبورد </span> می توانید پیگیری نمایید
                        </p>
                        <p className='bg-danger text-white text-center p-3 mb-4 mx-5'> ثبت درخواست شما توسط کارشناس رد شده است . علت رد، .....   است ، لطفا اصلاح نمایید . <Link to="/Admin" className=' text-primary'> بازگشت و اصلاح </Link>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default EzafereshteUpload