import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Share from '../img/share.svg';
import khabar1 from '../img/8569056905-12.png';
import khabar2 from '../img/14815_107805.jpg';
import khabar3 from '../img/8569056905-1.jpg';
import khabar4 from '../img/14010602000729_Test_PhotoO.jpg';


const Slide = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 500,
        cssEase: "linear",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };

    return (

        <>
            <div className='text-center container my-5 ' id="akhbar">
                <h2 className='fw-bold mb-4 ' > اخبار و اطلاعیه ها</h2>

                <Slider className='py-3 border-top col-md-12 slider-slid' {...settings}>
                    <div className="card col-lg-1 border">
                        <img className='khabar1' alt="اخبار" src={khabar2} />
                        <div className="card-header hhh fw-bold bg-secondary text-white">
                            برگزاری شورای مهارت شهرستان شمیرانات میزبانی فرمانداری با حضور روسای مراکز
                        </div>
                        <div className="card-body">
                            <h5 className="card-title textdanger d-none d-md-none d-lg-block ">يکشنبه ٢٦ تير ١٤٠١</h5>
                            <p className="card-text d-none d-md-none d-lg-block ppp">شورای مهارت شمیرانات به میزبانی فرمانداری با حضور روسای مراکز آموزش فنی و حرفه ای زعفرانیه و اقدسیه با هدف بررسی آخرین وضعیت مهارت آموزی برگزار شد.</p>
                            <div className='d-flex justify-content-around align-items-center '>
                                <Link to="/KHabar" className="p-3 text-decoration-none text-secondary"><small className='pe-1 pe-md-5'>ادامه مطلب</small>
                                </Link>
                                <Link to="#">
                                    <img className='ps-1 ps-md-2 ' src={Share} alt='انتشار' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-1 border">
                        <img className='khabar2' alt="اخبار" src={khabar1} />
                        <div className="card-header hhh fw-bold bg-secondary text-white">
                            بازدید رئیس و کارکنان مرکز شماره 8 زعفرانیه از خیریه عمل بمناسبت روز جهانی بهزیستی
                        </div>
                        <div className="card-body">
                            <h5 className="card-title textdanger d-none d-md-none d-lg-block">سه شنبه 20 آذر ١٤٠١</h5>
                            <p className="card-text d-none d-md-none d-lg-block ppp">  رئیس مرکز آموزش فنی و حرفه ای زعفرانیه از بهزیستی خیریه عمل ،به مناسبت ۱۲ آذر ماه روز جهانی  بازدید و  روند خدمت رسانی به این عزیزان را بررسی نمود  وبا با اهدا  گل به مددجویان  این مرکز تقدیر بعمل آورد.</p>
                            <div className='d-flex justify-content-around align-items-center '>
                                <Link to="/KHabar1" className="p-3 text-decoration-none text-secondary"><small className='pe-1 pe-md-5'>ادامه مطلب</small>
                                </Link>
                                <Link to="#">
                                    <img className='ps-1 ps-md-2' src={Share} alt='انتشار' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-1 border">
                        <img className='khabar3' alt="اخبار" src={khabar3} />
                        <div className="card-header hhh fw-bold bg-secondary text-white">
                            آیین تفاهم‌نامه همکاری اتاق اصناف ایران و سازمان آموزش فنی‌وحرفه‌ای کشور
                        </div>
                        <div className="card-body">
                            <h5 className="card-title textdanger d-none d-md-none d-lg-block">دوشنبه ٣١ مرداد ١٤٠١ </h5>
                            <p className="card-text d-none d-md-none d-lg-block ppp">معاون وزیر تعاون، کار و رفاه اجتماعی و رئیس سازمان آموزش فنی و حرفه ای کشور در آیین تفاهم‌نامه همکاری اتاق اصناف ایران با این سازمان بر توسعه «نهضت مهارت آموزی» در گام دوم انقلاب تأکید کرد.</p>
                            <div className='d-flex justify-content-around align-items-center '>
                                <Link to="/KHabar2" className="p-3 text-decoration-none text-secondary"><small className='pe-1 pe-md-5'>ادامه مطلب</small>
                                </Link>
                                <Link to="#">
                                    <img className='ps-1 ps-md-2' src={Share} alt='انتشار' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-1 border">
                        <img className='khabar4' alt="اخبار" src={khabar4} />
                        <div className="card-header hhh fw-bold bg-secondary text-white">
                            تدوین 1234 استاندارد آموزشی دانش بنیان / حق انحصاری استانداردهای نوین آموزشی و مهارتی
                        </div>
                        <div className="card-body">
                            <h5 className="card-title textdanger d-none d-md-none d-lg-block">شنبه ٢٩ مرداد ١٤٠١</h5>
                            <p className="card-text d-none d-md-none d-lg-block ppp">
                                معاون وزیر تعاون، کار و رفاه اجتماعی و رئیس سازمان آموزش فنی و حرفه ای کشور، در آیین اعطای مجوز مهارت آموزی و مشاوره شغلی به دانشگاه و پژوهشگاه عالی دفاع ملی و تحقیقات راهبردی از تدوین 1234 استاندارد آموزشی دانش بنیان خبر داد.
                            </p>
                            <div className='d-flex justify-content-around align-items-center '>
                                <Link to="/KHabar3" className="p-3 text-decoration-none text-secondary"><small className='pe-1 pe-md-5'>ادامه مطلب</small>
                                </Link>
                                <Link to="#">
                                    <img className='ps-1 ps-md-2' src={Share} alt='انتشار' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Slide;