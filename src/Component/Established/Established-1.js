import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import HeaderEstablished from "./headerEstablished";

import TabVeiws1 from '../Admin/TabVeiws1'
import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutUser from "../layout/LayoutUser";


const Established1 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <>
            <LayoutUser>
            <div className="container-fluid d-flex flex-column align-item-center justify-content-center bg-light">
                <div className="">
                    <div className="EsSpan2 mt-3">
                    <HeaderEstablished />
                    </div>
                    <div className="my-5 mx-5">
                        <TabVeiws1 />
                    </div>
                    <div className="bg-info text-center p-5 mx-5">
                        <p className="bg-primary bgprimary border-0 text-white p-3 mx-5 mb-4 fs-4"> کارشناس رشته های تکنسین  </p>
                        <div className=" bg-secondary mx-5 p-3">
                        <span className="bg-danger text-white mx-2 pe-2 fs-5"> دلیل رد : </span>
                            <span className="text-white bg-danger mx-2 px-3 fs-5"> نواقص مدارک ، شناسنامه و اصل گواهی نامه </span>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <div >
                            <Link to="/Established" className="btn btn-success rounded-0 px-5 py-2 btn-establish">
                                بازگشت و اصلاح
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            </LayoutUser>
        </>
    );
}

export default Established1;