import React,{useEffect} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import LayoutUser from '../layout/LayoutUser'
import khabar1 from '../../img/8569056905-12.png';

const KHabar = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <LayoutUser >
            <div className='container-fiuld KhabarU'>
                <div className=' d-flex justify-content-between py-4 px-4 bg-info'>
                    <span className='text-white fw-bold mx-5' style={{ fontSize: '20px' }}>مشاهده خبر</span>
                    <Link className='mx-5 text-decoration-none' to="/">
                        <span className='text-white'>صفحه اصلی</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{weight:'30px' , height:'30px'}}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                </div>
                <div className='d-flex'>
                    <div className='col-9 justify-content-center pb-4'>
                        <div className=''>
                            <p style={{ fontSize: '18px' }} className='p-5 mb-5 fw-bold bg-light border-start'>*  بازدید رئیس و کارکنان مرکز شماره 8 زعفرانیه از خیریه عمل بمناسبت روز جهانی بهزیستی</p>
                            <div className='d-flex justify-content-center'>
                                <img style={{ width: '450px', height: '350px' }} className='' src={khabar1} alt="خبر" />
                            </div>
                            <div className='my-4 py-3 px-3' style={{ textAlign: 'justify', lineHeight: '30px' }}>
                                <div className='border-bottom my-3 py-3'>
                                    <span className='mx-4'>تاریخ : 1401/07/10 </span>
                                </div>
                                <p className='py-2 mx-3'>رئیس مرکز آموزش فنی و حرفه ای زعفرانیه از بهزیستی خیریه عمل ،به مناسبت ۱۲ آذر ماه روز جهانی  بازدید و  روند خدمت رسانی به این عزیزان را بررسی نمود  وبا با اهدا  گل به مددجویان  این مرکز تقدیر بعمل آورد. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 bg-light px-3'>
                        <div className='py-3 my-2 mx-1'>
                            <p className=' fw-bold'>آخرین خبرـــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</p>
                        </div>
                        <div className='border-bottom py-2'>
                            <p>
                                الزام رعایت بندهای فهرست مصادیق محتوای مجرمانه در فضای مجازی
                            </p>
                            <small>1401/07/20</small>
                        </div>
                        <div>
                        <div className='border-bottom py-2'>
                            <p>
                                هماهنگی لازم اتاق انصاف با دانشکده فنی حرفه ای
                            </p>
                            <small>1401/07/23</small>
                        </div>
                        <div className='border-bottom py-2'>
                            <p>
                                برگزاری نخستین نمایشگاه خدمات کسب‌وکار ایران                          </p>
                            <small>1401/06/30</small>
                        </div>
                        <div className='border-bottom py-2'>
                            <p>
                                فراخوان ثبت نام در نمایشگاه GITEX دوبی | اعزام ۱۰ استارت‌آپ منتخب                            </p>
                            <small>1401/06/19</small>
                        </div>
                        <div className='border-bottom py-2'>
                            <p>
                                الزام رعایت بندهای فهرست مصادیق محتوای مجرمانه در فضای مجازی
                            </p>
                            <small>1401/05/02</small>
                        </div>
                        <div className='border-bottom py-2'>
                            <p>
                                برگزاری نخستین نمایشگاه خدمات کسب‌وکار ایران                            </p>
                            <small>1401/06/01</small>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer className="mt-0" />
            </div>
        </LayoutUser >
    )
}

export default KHabar;