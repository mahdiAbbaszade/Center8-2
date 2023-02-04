import React,{useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LayoutAdmin from '../layout/LayoutAdmin'
import Tabveiws2 from './TabVeiws2';

const DarkhasteSHoab = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <LayoutAdmin>
            <div className=''>
                <Tabveiws2 />
                <div className='mx-5 my-5 justify-content-center'>

                    <p className='text-primary bg-secondary bg-opacity-10 p-2 px-3 w-100 text-center my-1'>
                        کاربر گرامی لطفا نامه درخواست تغییر شعبه را دانلود ، امضا و آپلود نمایید .
                        <br />
                    </p>
                    {/* form */}
                    <div className=' justify-content-center bg-white p-3'>
                        <div className="input-group px-0 my-2">
                            <InputGroup.Text id="basic-addon1" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent">اینجانب:
                                <Form.Control placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1 " className="establish-Form-Control"
                                />
                            </InputGroup.Text>
                            <InputGroup.Text id="basic-addon2" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent">با نام آموزشگاه:
                                <Form.Control placeholder="نام آموزشگاه" aria-describedby="basic-addon2"
                                />
                            </InputGroup.Text>
                            <InputGroup.Text id="basic-addon3" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent">و کد ملی  :
                                <Form.Control placeholder="کدملی" aria-describedby="basic-addon3"
                                />
                            </InputGroup.Text>

                            <Tabs className="mb-3 bg-transparent mt-4"  >
                                <Tab.Container className='bg-transparent' eventKey="home" title="تهران">
                                    <div className=' d-flex border-bottom'>
                                        <div className='my-3 p-3 border rounded'>
                                            <h6 className=' fw-bold bg-info text-white p-3 rounded'> تهران </h6>
                                            <h5 className='my-1 fw-bold'>ریاست محترم آموزش فنی و حرفه ای مرکز هشت زعفرانیه</h5>
                                            <h5 className='my-4'>جناب آقای ... </h5>
                                            <p className='my-4'>با سلام و احترام</p>
                                            <p className='my-4'>احتراما به استحضار می رساند اینجانب ....... موسس آموزشگاه آزاد ...... درخواست شعبه در شهر تهران ، منطقه ....... در رشته های ....... دارم .</p>
                                        </div>
                                    </div>
                                </Tab.Container>

                                <Tab.Container className='bg-transparent shadow-none ModalActive2' eventKey="contact" title="شهرستان">
                                    <div className=' d-flex border-bottom'>
                                        <div className='my-3 p-3 border rounded'>
                                            <h6 className=' fw-bold bg-info text-white p-3 rounded'> شهرستان </h6>
                                            <h5 className='my-1 fw-bold'>ریاست محترم آموزش فنی و حرفه ای مرکز هشت زعفرانیه</h5>
                                            <h5 className='my-4'>جناب آقای ... </h5>
                                            <p className='my-4'>با سلام و احترام</p>
                                            <p className='my-4'>احتراما به استحضار می رساند اینجانب ....... موسس آموزشگاه آزاد ...... درخواست شعبه در شهر تهران ، منطقه ....... در رشته های ....... دارم .</p>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </Tabs>

                        </div>
                        <div className='d-grid col-2 me-auto'>
                            <button className='btn btn-success my-2 rounded-0 '> ثبت درخواست </button>
                            <button className='btn btn-primary bgprimary border my-2 rounded-0 '>  دانلود </button>
                            <button className='btn btn-primary bgprimary border my-2 rounded-0 '>  آپلود </button>
                        </div>
                        <p className='text-primary bg-secondary bg-opacity-10 p-2 px-3 w-100 text-center my-1'>
                            همکاران در اسرع وقت درخواست شما را بررسی و نتیجه به شما اعلام خواهد شد
                        </p>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default DarkhasteSHoab