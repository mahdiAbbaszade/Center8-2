import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import LayoutUser from '../layout/LayoutUser';
import HeaderEstablished from './headerEstablished';
import TabVeiws1 from '../Admin/TabVeiws1'
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';


const Established6 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <LayoutUser >
            <div className='container-fluid d-flex flex-column align-item-center justify-content-center bg-light pb-3'>
                <div className="EsSpan2 mt-3">
                    <HeaderEstablished />
                </div>
                <div className="my-5 mx-5">
                    <TabVeiws1 />
                </div>
               
                <div className='d-flex justify-content-center fw-bold mb-3 mt-2 '>
                    <p className='text-center py-5 mx-5 text-white bg-secondary px-5 fw-bold'>
                       کاربر گرامی درخواست شما ثبت شد ؛کارشناسان در اسرع وقت به درخواست شما رسیدگی می کنند .
                    </p>
                </div>
                <div className='d-flex justify-content-center m-2 mb-2'>
                    <div className='mt-0 w-25 text-center'>
                        <div className=' py-0 px-2 mt-1 '>
                            <div className='d-flex flex-column justify-content-center align-items-center px-2 py-2'>
                                <p className='fw-bold mx-0 my-5 d-flex flex-column align-items-center justify-content-center'>
                                    <Link to="/" className='text-white text-decoration-none'>
                                        <span className='px-4 py-3 bg-success bgprimary border-0 w-auto'> بازگشت به صفحه اصلی </span>
                                    </Link>
                                </p>
                                {/* <p className='fw-bold mx-0 my-2 pt-5 d-flex flex-column align-items-center justify-content-center border-top border-dark'>
                                    <Form.Group controlId="formFileMultiple1" className="d-flex align-items-center">
                                        <Form.Label className=" px-0 py-2 EsFormLable" > آپلود رسید </Form.Label>
                                        <Form.Control className="bg-primary bgprimary border-0 text-white" type="file" multiple />
                                    </Form.Group>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-1">
                    {/* <Link to="/Established5" className="btn btn-info rounded-0 px-5 py-2 ">
                       مرحله قبل
                        <span className="pe-3 text-danger"><Icon.ArrowRightCircleFill /></span>
                    </Link> */}
                </div>
            </div>
        </LayoutUser>
    );
}

export default Established6;