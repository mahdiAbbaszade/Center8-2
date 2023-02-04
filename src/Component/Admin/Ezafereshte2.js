import React, { useEffect } from "react";
import HeaderEstablished from "../Established/headerEstablished";
import LayoutAdmin from '../layout/LayoutAdmin';
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import TabVeiws from "./TabVeiws";
import TableEstablished2 from "../Established/TableEstablished2";
import Tabveiws from "./TabVeiws";
import { useState } from "react";
import Ezafereshte from "./Ezafereshte";
import EzafereshteUpload from "./EzafereshteUpload";



const Ezafereshte2 = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    const [level, setLevel] = useState( 0 )
    return (
        <LayoutAdmin>
            <div className="">
                <div style={{ fontSize: "20px" }}>
                    <HeaderEstablished />
                </div>
            </div>
            <div className="">
                <Tabveiws level={level} />
            </div>
            {
                level === 0 ?
                    <div className='container-fluid d-flex flex-column align-item-center justify-content-center bg-light'>
                            <EzafereshteUpload />
                        {/* <div className='mb-5 mt-2'>
                            <p className='text-center py-3 mx-5 bg-info fw-bold'>
                                کاربر گرامی خوشه مورد تقاضا را انتخاب کنید
                            </p>
                        </div>
                        <div className='d-flex justify-content-center my-4 mt-2'>
                            <div className='d-flex flex-column justify-content-center border filter-table'>
                                <label className='bgprimary border-0 p-3 text-white'>فیلتر جدول براساس خوشه : </label>
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
                        </div>
                        <div>
                            <p className='text-center py-3 mx-5 bg-info fw-bold'>
                                * رشته / رشته های مورد تقاضا را انتخاب کنید
                            </p>
                        </div>

                        <TableEstablished2 /> */}
                        <div className="text-center my-4">
                            <div >
                                {/* <button onClick={() => setLevel( 1 )} className="btn btn-success rounded-0 px-4 py-2 btn-establish">
                                 ادامه
                                    <span className="pe-3"><Icon.ArrowLeftCircleFill /></span>
                                </button> */}
                            </div>
                        </div>
                    </div> : level === 1 ? <Ezafereshte setLevel={setLevel} /> : level === 2 ?
                        <EzafereshteUpload /> : null
            }
        </LayoutAdmin>
    )
}

export default Ezafereshte2