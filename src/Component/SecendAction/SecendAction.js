import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Ic1 from '../../img/ic1.svg';
import Ic3 from '../../img/ic3.svg';
import Ic4 from '../../img/ic4.svg';
import Ic5 from '../../img/ic5.svg';
import Ic6 from '../../img/ic6.svg';
import Ic7 from '../../img/ic7.svg';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const SecendAction = () => {
    function getItem( label, key, icon, children, type ) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [

        getItem( <Link className="text-decoration-none px-1" onClick={People} to="" target="_blank">
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> مراکز آموزشی</li>
        </Link>, 'sub2', '', [] ),
        getItem( <p className="text-decoration-none px-1" >
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> درباره مرکز</li>
        </p>, 'sub3', '', [
            getItem( 'پیام رئیس مرکز', '6' ),
            getItem( 'اصطلاحات و تعاریف ', '7' ),
            getItem( 'منشور اخلاقی سازمان ', '8' ),
            getItem( 'اینفوگرافی مرکز هشت ', '9' ),
            getItem( 'چارت سازمانی ', '12' ),
        ] ),
        getItem( <p className="text-decoration-none px-1" >
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> آموزش پژوهش برنامه ریزی</li>
        </p>, 'sub4', '', [
            getItem( 'کارگاه های فعال مرکز', '10' ),
            getItem( 'ثبت نام در دوره های مرکز ', '11' ),
            // getItem('Option 12', '13'),
        ] ),
        getItem( <p className="text-decoration-none px-1" >
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> مسابقات ملی مهارت</li>
        </p>, 'sub5', '', [
            getItem( 'دستورالعمل برگزاری مسابقات', '14' ),
            getItem( 'مسابقات ملی مهارت', '15' ),
            getItem( 'مسابقات مهارت جهانی', '16' ),
            getItem( 'نخبگان مهارتی در اردوی مسابقات جهانی شانگهای چین', '17' ),
            getItem( 'مسابقات ملی مهارت آزاد', '35' ),
        ] ),
        getItem( <Link className="text-decoration-none px-1" to="/FormShekayat">
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> رسیدگی به شکایات</li>
        </Link>, 'sub6', '', [] ),
        getItem( <Link className="text-decoration-none px-1" onClick={People} to="" target="_blank">
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> آموزش در صنایع و صنوف</li>
        </Link>, 'sub7', '', [] ),
        getItem( <Link className="text-decoration-none px-1" onClick={People} to="" target="_blank">
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> مشاوره و هدایت شغلی</li>
        </Link>, 'sub8', '', [] ),
        getItem( <p className="text-decoration-none px-1" >
            <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> سنجش و ارزشیابی</li>
        </p>, 'sub9', '', [
            getItem( 'اعلام زمانبندی آزمون های آنلاین و هماهنگ', '30' ),
            getItem( 'دستورالعمل های اجرایی', '31' ),
            getItem( 'نمونه فرم ها', '32' ),
            getItem( 'تمدید و بروز رسانی گواهینامه آموزشی', '33' ),
            getItem( ' ادواری', '34' ),
        ] ),
    ];
    const onClick = ( e ) => {
        console.log( 'click ', e );
    };
    return (
        <>
            <div className="d-flex justify-content-center py-0 py-md-5 my-5 mx-2">
                <div className="dastrasy col-3 col-md-3 col-lg-3 p-1 m-0 text-center d-none d-md-block">
                    <div className="py-0 py-md-1 py-lg-0">
                        <ul className="d-flex flex-column justify-content-end text-end p-0 ">
                            <p className="fw-bolder text-center p-0 my-4">دسترسی های سریع</p>
                            <Menu
                                className={'center8-menu-icon-rotate dastrasy1'}
                                style={{ maxHeight: '100%', overflowY: 'auto', backgroundColor: "" }}
                                onClick={onClick}
                                mode="vertical"
                                items={items}
                            />
                        </ul>
                    </div>
                </div>
                <div className=" col-11 col-md-9 col-lg-8 d-flex flex-column flex-md-column justify-content-between py-0 px-1 mt-0">
                    <div
                        className="col-12 col-md-12 d-flex flex-row justify-content-around pb-1 pb-lg-2 mb-md-1 ms-0 p-0">
                        <Link
                            className="shadow shadow-lg col col-md-4 shadow col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="/tehranm8tvto/Established">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic1} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">تاسیس</p>
                            </div>
                        </Link>
                        <Link
                            className="shadow shadow-lg col col-md-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="/FormShekayat">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic7} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1"> فرم شکایات
                                    مردمی </p>
                            </div>
                        </Link>
                        <Link to={'/Tamdid'}
                            className="shadow shadow-lg col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic3} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">تمدید
                                    گواهینامه </p>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-12 col-md-12 d-flex flex-row justify-content-around pb-1 pb-lg-2 mb-md-1 ms-0 p-0">
                        <Link
                            className="shadow shadow-lg col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="/tehranm8tvto/Established">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic1} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">آموزش</p>
                            </div>
                        </Link>
                        <Link
                            className="shadow shadow-lg col col-md-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="/FormShekayat">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic7} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1"> همکاری با
                                    سازمان ها </p>
                            </div>
                        </Link>
                        <Link onClick={govahi}
                            className="shadow shadow-lg col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic3} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">خییرین
                                    مهارتی </p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-md-12 d-flex flex-row justify-content-around mb-0 mb-md-1 ms-2 p-0">
                        <Link onClick={kart}
                            className="shadow shadow-lg col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic4} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">کارت آزمون</p>
                            </div>
                        </Link>
                        <Link
                            className="shadow shadow-lg col col-md-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic5} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">نتایج آزمون</p>
                            </div>
                        </Link>
                        <Link onClick={azmoon}
                            className="shadow shadow-lg col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bgprimary my-0 mx-1 mx-md-0 part1"
                            to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic6} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">آزمون
                                    ادواری </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="py-5 d-flex flex-column flex-md-row justify-content-center px-1 px-lg-5 border-bottom my-4">
                <p className="d-flex align-items-center justify-content-between bgprimary border-2 text-white col-16 col-md-5 col-lg-5 rounded px-1 py-4 m-0 ms-0 mt-1">
                    <span className="p-2 px-2 fw-bold fs-4 border-3 border-start text-center">میز خدمت</span>
                    <span
                        className="mx-0 px-1 text-center mx-auto fw-bold text-warning">  کد پیگیری را وارد کنید </span>
                </p>
                <div
                    className={`d-flex align-items-center bgprimary border-2 py-2 rounded me-0 me-md-3 mt-1 peydiry2 active33 `}>
                    <form
                        className={`d-flex col-12 align-items-center  form-control bg-transparent border-0 peydiry2 active333`}>
                        <input type="search" className='form-control col-12 SerInput py-2 px-1 bg-white border-0'
                            placeholder='کدپیگیری را وارد کنید' />
                        <button className='border-0 bg-transparent me-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className=' svgOne text-white mx-2'>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

function About() {

    window.open( 'http://tehrantvto.ir/', '_blank' );

    return null;
}

function kart() {

    window.open( 'http://azmoon.portaltvto.com/card/card/index/1/80', '_blank' );

    return null;
}

function pey() {

    window.open( 'https://pay.portaltvto.com/pay/bmi2/shop', '_blank' );

    return null;
}

function azmoon() {

    window.open( 'http://azmoon.portaltvto.com/result/result/public_pg_amali', '_blank' );

    return null;
}

function People() {

    window.open( 'https://irantvto.ir/', '_blank' );

    return null;
}

// function office() {

//     window.open( 'http://portaltvto.com/', '_blank' );

//     return null;
// }
function govahi() {

    window.open( 'http://advari.irantvto.ir/index.php/insertion_data/pay_person', '_blank' );

    return null;
}


export default SecendAction;




