import React from 'react'
import LayoutUser from '../../layout/LayoutUser'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

function FormShekayat() {
    return (
        <LayoutUser>
            <div className=' container-fluid p-0 mt-5 border-top pt-3'>
                <div className='mx-5'>
                    <Link to="/" className=' text-decoration-none d-flex'>
                        <span className='me-auto mx-5 px-3 py-2 bg-danger text-white rounded'> صفحه اصلی </span>
                    </Link>
                    <h3 className='text-center bg-info my-3 p-3 mx-5 rounded'> فرم شکایات درخواست مردمی</h3>
                </div>
                <div>
                    <form>
                        <div className="col d-flex justify-content-center">
                            <div className="col-12 col-md-12 col-lg-11 p-1 mx-0 my-2 p-md-2 p-lg-1">
                                <div className="col-12 col-md-12 col-lg-12 px-1 px-md-2 px-lg-0 d-flex justify-content-center">
                                    <div className="form-establish px-0 px-md-1 px-lg-0 py-3 col-lg-12 col-md-12 col-12 rounded border border-1 border-dark">
                                        <h4 className=' fw-bold me-4'>
                                            مشخصات اشخاص حقیقی
                                        </h4>
                                        <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                            <InputGroup.Text id="basic-addon1" className="col-6 col-md-6 col-lg-4 rounded-0 input2"> نام و نام خانوادگی <Form.Control placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1" className="establish-Form-Control"
                                            />
                                            </InputGroup.Text>

                                            <InputGroup.Text id="basic-addon3" className="col-6 col-md-6 col-lg-4 rounded-0 input2">نام پدر :
                                                <Form.Control placeholder="نام پدر" aria-describedby="basic-addon3"
                                                />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon4" className="col-6 col-md-6 col-lg-4 rounded-0 input2">شماره شناسنامه :
                                                <Form.Control placeholder="شماره شناسنامه" className="rounded" aria-describedby="basic-addon4"
                                                />
                                            </InputGroup.Text>
                                        </div>
                                        <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                            <InputGroup.Text id="basic-addon5" className="col-6 col-md-6 col-lg-4 rounded-0 input2" >کدملی :
                                                <Form.Control placeholder="کدملی" aria-describedby="basic-addon5"
                                                />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon5" className="col-6 col-md-6 col-lg-4 rounded-0 input2" > محل صدور استان و شهر <Form.Control placeholder="محل صدور استان و شهر " aria-describedby="basic-addon5"
                                            />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon6" className="col-6 col-md-6 col-lg-4 rounded-0 input2">تاریخ دقیق تولد :
                                                <Form.Control placeholder="تاریخ تولد" className="rounded" aria-describedby="basic-addon6" type="date"
                                                />
                                            </InputGroup.Text>
                                        </div>
                                        <div className="input-group col px-0 px-md-1 px-lg-1 my-1">
                                            <InputGroup.Text id="basic-addon19" className="col px-1 rounded-0 input2">آدرس محل سکونت :
                                                <Form.Control className="rounded input2" placeholder="آدرس محل سکونت " aria-describedby="basic-addon19"
                                                />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon19" className="col px-1 rounded-0 input2"> شماره  تلفن ثابت  :
                                                <Form.Control className="rounded input2" placeholder=" شمارع تلفن ثابت " aria-describedby="basic-addon19"
                                                />
                                            </InputGroup.Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="col-12 col-md-12 col-lg-11 p-1 mx-0 my-2 p-md-2 p-lg-1">
                                <div className="col-12 col-md-12 col-lg-12 px-1 px-md-2 px-lg-0 d-flex justify-content-center">
                                    <div className="form-establish px-0 px-md-1 px-lg-0 py-3 col-lg-12 col-md-12 col-12 rounded border border-1 border-dark">
                                        <h4 className=' fw-bold me-4'>
                                            مشخصات اشخاص حقوقی
                                        </h4>
                                        <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                            <InputGroup.Text id="basic-addon1" className="col-6 col-md-6 col-lg-4 rounded-0 input2"> نام آموزشگاه <Form.Control placeholder="نام آموزشگاه  " aria-describedby="basic-addon1" className="establish-Form-Control"
                                            />
                                            </InputGroup.Text>

                                            <InputGroup.Text id="basic-addon3" className="col-6 col-md-6 col-lg-4 rounded-0 input2"> شماره ثبت :
                                                <Form.Control placeholder=" شماره ثبت " aria-describedby="basic-addon3"
                                                />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon4" className="col-6 col-md-6 col-lg-4 rounded-0 input2"> زمینه اصلی فعالیت :
                                                <Form.Control placeholder=" زمسنه اصلی فعالیت " className="rounded" aria-describedby="basic-addon4"
                                                />
                                            </InputGroup.Text>
                                        </div>
                                        <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                            <InputGroup.Text id="basic-addon5" className="col-6 col-md-6 col-lg-4 rounded-0 input2" >کدملی :
                                                <Form.Control placeholder="کدملی" aria-describedby="basic-addon5"
                                                />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="basic-addon5" className="col-6 col-md-6 col-lg-4 rounded-0 input2" > نام و نام خانوادگی مدیر عامل <Form.Control placeholder="نام و نام خانوادگی مدیر عامل " aria-describedby="basic-addon5"
                                            />
                                            </InputGroup.Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='mx-4'>
                        <div className='d-flex justify-content-between mx-5 bg-light'>
                            <div className='d-flex align-items-center col'>
                                <InputGroup.Text id="basic-addon1" className=" rounded-0 input2 col-12"> شماره ثبت  :<Form.Control placeholder=" شماره ثبت " aria-describedby="basic-addon1" className="establish-Form-Control col"
                                />
                                </InputGroup.Text>
                            </div>
                            <div className=' d-flex align-items-center col'>
                                <InputGroup.Text id="basic-addon1" className=" rounded-0 input2 col-12"> تاریخ :<Form.Control placeholder="تاریخ " aria-describedby="basic-addon1" type="date" className="establish-Form-Control col"
                                />
                                </InputGroup.Text>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 mx-5'>
                        <textarea className="form-control my-3 mx-auto rounded-0" id="Textarea1" rows="5" placeholder=' خلاصه موضوع '>
                        </textarea>
                    </div>
                    <div className='mx-5 my-4'>
                        <p className='mx-4 bg-info px-3 py-3'>
                             هموطن گرامی توجه فرمایید : طرح شکایت در مراجع بالاتر منوط به عدم پاسخگویی در موعد مقرر یا عدم رضایت از پاسخ دریافتی در مراجع پایین تر است . در صورتی که شکایت یا درخواست ابتدا در مراجع مطرح شود ، برای رسیدگی به مراجع ذیربط ارجاع خواهد شد .
                        </p>
                    </div>

                </div>
                <div className='d-flex justify-content-center mb-4 '>
                    <button className='px-5 py-2 bg-success btn'> ثبت درخواست </button>
                </div>
            </div>
        </LayoutUser>
    )
}

export default FormShekayat