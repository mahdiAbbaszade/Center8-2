import React, { useEffect } from "react";
import HeaderEstablished from "../Established/headerEstablished";
import TableEstablished3 from "../Established/TableEstablished3";
import LayoutAdmin from '../layout/LayoutAdmin';
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import Tabveiws from "./TabVeiws";
import { useState } from "react";


const Ezafereshte = ( { setLevel } ) => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <div className='container-fluid p-0 d-flex flex-column align-item-center justify-content-center bg-light'>
            {/* <div className='d-flex justify-content-center my-5'>
                <div className='d-flex flex-column justify-content-center border filter-table'>
                    <label className='bg-primary bgprimary border-0 p-3 text-white'>فیلتر جدول براساس خوشه : </label>
                    <form className=''>
                        <input className='m-2 me-3 mt-3' id="khoshe" name="khoshe" type="radio" value="همه خوشه ها" />
                        <label className='ps-4 pe-2 py-2' for="khoshe">همه خوشه ها</label>
                        <br />
                        <input className='m-2 me-3' id="Services" name="khoshe" type="radio" value="خوشه خدمات" />
                        <label className='ps-4 pe-2 py-2' for="Services">خوشه خدمات</label>
                        <br />
                        <input className='m-2 me-3' id="industry" name="khoshe" type="radio" value="خوشه صنعت " />
                        <label className='ps-4 pe-2 py-2' for="industry">خوشه صنعت </label>
                        <br />
                        <input className='m-2 me-3' id="Culture" name="khoshe" type="radio" value="خوشه فرهنگ و هنر" />
                        <label className='ps-4 pe-2 py-2' for="Culture">خوشه فرهنگ و هنر</label>
                        <br />
                        <input className='m-2 me-3' id="Farmer" name="khoshe" type="radio" value="خوشه کشاورزی " />
                        <label className='ps-4 pe-2 py-2' for="Farmer">خوشه کشاورزی </label>
                    </form>
                </div>
            </div> */}
            {/* <TableEstablished3 /> */}
            <div className="d-flex justify-content-center my-4">
                <div >
                    {/* <button onClick={() => setLevel( 2 )} className="btn btn-success rounded-0 px-4 py-2 btn-establish">
                         ادامه
                        <span className="pe-3"><Icon.ArrowLeftCircleFill /></span>
                    </button> */}
                </div>
                {/* <div >
                    <Link to="/Ezafereshte21" className="btn btn-danger rounded-0 px-5 py-2 mx-4">
                        نظر کارشناس
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Ezafereshte