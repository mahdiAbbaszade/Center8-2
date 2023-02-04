import React, { useEffect } from 'react';
import HeaderEstablished from './headerEstablished';
import TableEstablished3 from './TableEstablished3';
import TabVeiws1 from '../Admin/TabVeiws1'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import LayoutAdmin from '../layout/LayoutAdmin';
import LayoutUser from '../layout/LayoutUser';


const Established2 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <>
            <LayoutUser>
                <div className='container-fluid d-flex flex-column align-item-center justify-content-center bg-light'>
                    <div className="EsSpan2 mt-3">
                        <HeaderEstablished />
                    </div>
                    <div className="my-5 mx-5">
                        <TabVeiws1 />
                    </div>
                    <div>
                        <p className='text-center py-3 mx-5 bg-info fw-bold'>
                            کاربر گرامی حرفه های مورد نظر در رشته های انتخابی خود را انتخاب نمایید
                        </p>
                    </div>
                    <TableEstablished3 />
                    <div className="text-center my-4">
                        <div >
                            <Link to="/Established2" className="btn btn-info rounded-0 px-5 py-2 mx-2">
                                مرحله قبل
                                <span className="pe-3 text-warning"><Icon.ArrowRightCircleFill /></span>
                            </Link>
                            <Link to="/Established4" className="btn btn-success rounded-0 px-4 py-2 btn-establish">
                                تایید و ادامه
                                <span className="pe-3"><Icon.ArrowLeftCircleFill /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutUser>
        </>
    );
}

export default Established2;