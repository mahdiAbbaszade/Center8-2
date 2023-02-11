import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import HeaderEstablished from "./headerEstablished";
import TabVeiws1 from '../Admin/TabVeiws1'
import schema from "../validation/formValidation";
import { useParams } from "react-router-dom";
import { DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener } from "antd-jalali";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import moment from "moment";
import Api from "../../api/request/api";
import EstablishedController from "../../mobx/controller/establishedController/establishedController";
import { observer } from "mobx-react";
import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutUser from "../layout/LayoutUser";

const establishedController = new EstablishedController()
const Established = ( observer( () => {
    const [values, setValues] = useState( {} )
    const params = useParams()
    const handleValues = ( e, text ) => {
        if ( text === 'birtDate' ) {
            let date = moment( e ).locale( 'en' ).format( 'YYYY/MM/DD' )
            establishedController.items[`${text}`] = date
        } else {
            establishedController.items[`${text}`] = e.target.value
        }
        schema.validate( values ).catch( ( e ) => {
            // console.log(e)
        } )
    }


    // useEffect(()=>{
    //     window.scrollTo( 0, 0 )
    // },[])

    //     const handleImages =  (name) => {
    //         let imagedata = document.querySelector('input[type="file"]').files[0]
    //         const formData = new FormData()
    //         formData.append('file', imagedata)
    //         establishedController.sendImage('images', formData , name)
    //     }
    //    const sendFormData = () =>{
    //         establishedController.sendData('collages' )
    //    }
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
                        <div className="container p-2 my-5 text-center">
                            <div className="border w-75 px-0 py-4 m-auto rounded bg-white">
                                <p className="text-end d-flex align-items-center">
                                    <span className="p-2 fw-bold text-center">
                                        کابر گرامی جهت تاسیس آموزشگاه خود ابتدا باید سامانه ملی مجوزها ثبت نام کرده و سپس نسبت به ادامه ثبت نام آموزشگاه خود اقدام نمایید
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="container p-3">
                            <div className="container text-center">
                                <p className="pt-3">
                                    <span className="text-white bgprimary border-0 fw-bold px-5 py-3">
                                        ورود به سامانه ملی مجوزهای کسب و کار
                                    </span>
                                </p>
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center px-5 mx-5 mt-4 bg-info bg-opacity-50 py-5 Es">
                                <span className="me-5 fw-bold Esspan1">اینجانب در سامانه مجوزها ثبت نام کردم</span>
                                <Link to={'/tehranm8tvto/Established/1'}>
                                    <button className="btn btn-success p-2 my-auto ms-5 rounded"> تایید و ادامه</button>
                                </Link>
                            </div>
                        </div>
                        {
                            // params.code === '1' &&
                            <form >
                                <div className="d-non">
                                    <div className="col d-flex justify-content-center">
                                        <div className="col-12 col-md-12 col-lg-11 bg-light p-1 mx-0 my-2 p-md-2 p-lg-1">
                                            <div
                                                className="col-12 col-md-12 col-lg-12 px-1 px-md-2 px-lg-0 d-flex justify-content-center">
                                                <div
                                                    className="form-establish px-0 px-md-1 px-lg-0 py-3 col-lg-12 col-md-12 col-12 rounded border border-1 border-dark">
                                                    <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                                        <InputGroup.Text id="basic-addon1"
                                                            className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام
                                                            :
                                                            <Form.Control
                                                                type={'text'} placeholder="نام"
                                                                aria-describedby="basic-addon1"
                                                                className="establish-Form-Control"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon2"
                                                            className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام
                                                            خانوادگی :
                                                            <Form.Control
                                                                type={'text'} placeholder="نام خانوادگی"
                                                                aria-describedby="basic-addon2"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon3"
                                                            className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام
                                                            پدر :
                                                            <Form.Control
                                                                type={'text'} placeholder="نام پدر"
                                                                aria-describedby="basic-addon3"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon4"
                                                            className="col-6 col-md-6 col-lg-3 rounded-0 input2">شماره
                                                            شناسنامه :
                                                            <Form.Control
                                                                placeholder="شماره شناسنامه" className="rounded"
                                                                aria-describedby="basic-addon4"
                                                            />
                                                        </InputGroup.Text>
                                                    </div>
                                                    <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                                        <InputGroup.Text id="basic-addon5"
                                                            className="col-6 col-md-6 col-lg-6 rounded-0 input2">کدملی
                                                            :
                                                            <Form.Control
                                                                type={'number'} placeholder="کدملی"
                                                                aria-describedby="basic-addon5"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon6"
                                                            className="col-6 col-md-6 col-lg-6 rounded-0 input2">تاریخ
                                                            تولد :
                                                            <ConfigProvider locale={fa_IR} direction="rtl">
                                                                <JalaliLocaleListener />
                                                                <DatePickerJalali style={{ width: '100%' }}
                                                                    onChange={( e, v ) => handleValues( e
                                                                        , 'birtDate' )} />
                                                            </ConfigProvider>
                                                            {/*<Form.Control onChange={(e)=>handleValues(e , 'birtDate')} placeholder="تاریخ دقیق تولد" className="rounded" aria-describedby="basic-addon6" type="date"*/}
                                                            {/*/>*/}
                                                        </InputGroup.Text>
                                                    </div>
                                                    <InputGroup className="px-0 px-md-1 px-lg-1 my-1">
                                                        <InputGroup.Text id="basic-addon7"
                                                            className="col-3 col-md-3 col-lg-3 p-1 rounded-0 input2">تابعیت
                                                            :
                                                            <Form.Control
                                                                type={'text'} placeholder="تابعیت"
                                                                className="rounded" />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon8"
                                                            className="col-6 col-md-5 col-lg-5 p-1 rounded-0 input2">محل
                                                            تولد طبق شناسنامه :
                                                            <Form.Control
                                                                placeholder="محل تولد طبق شناسنامه"
                                                                className="rounded" />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon9"
                                                            className="col-3 col-md-4 col-lg-4 p-1 rounded-0 input2"> وضعیت
                                                            تاهل :
                                                            <Form.Control
                                                                type={'text'} placeholder="وضعیت تاهل "
                                                                className="rounded" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                    <InputGroup className="px-0 px-md-1 px-lg-1 my-1"
                                                    >
                                                        <InputGroup.Text id="basic-addon10"
                                                            className="col-12 col-md-12 col-lg-8 p-1 rounded-0 input2">وضعیت
                                                            تحصیلی :
                                                            <InputGroup.Text
                                                                className="col d-flex justify-content-around align-items-center bg-white">
                                                                <Form.Check className="rounded-0 input2 mx-0" inline
                                                                    value={'دانش آموز'} label="دانش آموز"
                                                                    name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline
                                                                    value={'دانشجو'} label="دانشجو" name="group1"
                                                                    type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline
                                                                    value={'فارغ التحصیل'} label="فارغ التحصیل"
                                                                    name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline
                                                                    value={'عدم اشتغال به تحصیل'}
                                                                    label="عدم اشتغال به تحصیل" name="group1"
                                                                    type="radio"
                                                                />
                                                            </InputGroup.Text>
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon11"
                                                            className="col-12 col-md-12 col-lg-4 p-1 rounded-0 input2"> آخرین
                                                            مقطع تحصیلی :
                                                            <Form.Control
                                                                type={'text'} placeholder="آخرین مقطع تحصیلی "
                                                                className="rounded" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                    <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                                        <InputGroup.Text id="basic-addon12"
                                                            className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2"> وضعیت
                                                            نظام وظیفه :
                                                            <Form.Control

                                                                type={'text'} placeholder="وضعیت نظام وظیفه"
                                                                aria-describedby="basic-addon12" className="rounded "
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon13"
                                                            className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">وضعیت
                                                            اشتغال :
                                                            <Form.Control
                                                                type={'text'} placeholder="وضعیت اشتغال"
                                                                aria-describedby="basic-addon13"
                                                                className=" rounded"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon14"
                                                            className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">نوع
                                                            شغل :
                                                            <Form.Control
                                                                type={'text'} placeholder="نوع شغل"
                                                                aria-describedby="basic-addon14"
                                                                className=" rounded"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon15"
                                                            className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">وضعیت
                                                            جسمانی :
                                                            <Form.Control
                                                                type={'text'} placeholder="وضعیت جسمانی"
                                                                aria-describedby="basic-addon15"
                                                                className=" rounded"
                                                            />
                                                        </InputGroup.Text>
                                                    </div>
                                                    <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                                        <div className="input-group">
                                                            <div className="col-12 col-md-4">
                                                                <InputGroup.Text id="basic-addon16"
                                                                    className="rounded-0 input2">کد پستی 10
                                                                    رقمی محل سکونت :
                                                                </InputGroup.Text>
                                                                <Form.Control

                                                                    type={'number'} placeholder="کد پستی 10 رقمی محل سکونت "
                                                                    className="rounded-0" aria-describedby="basic-addon16"
                                                                />
                                                            </div>
                                                            <div className="d-flex col col-md-4">
                                                                <div className="col m-0 p-0">
                                                                    <InputGroup.Text id="basic-addon16"
                                                                        className="rounded-0 input2">شماره تلفن
                                                                        ثابت :</InputGroup.Text>
                                                                    <Form.Control
                                                                        type={'number'}
                                                                        placeholder=" شماره تلفن ثابت"
                                                                        className="rounded-0"
                                                                        aria-describedby="basic-addon16"
                                                                    />
                                                                </div>
                                                                <div className="col m-0 p-0">
                                                                    <InputGroup.Text id="basic-addon16"
                                                                        className="rounded-0 input2">پیش شماره
                                                                        :</InputGroup.Text>
                                                                    <Form.Control

                                                                        type={'number'} placeholder=" پیش شماره "
                                                                        className="rounded-0"
                                                                        aria-describedby="basic-addon16"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <InputGroup.Text id="basic-addon18"
                                                                    className="rounded-0 input2">شماره تلفن
                                                                    همراه :</InputGroup.Text>
                                                                <Form.Control

                                                                    type={'number'} placeholder="شماره تلفن همراه "
                                                                    className="rounded-0" aria-describedby="basic-addon18"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-group col px-0 px-md-1 px-lg-1 my-1">
                                                        <InputGroup.Text id="basic-addon19"
                                                            className="col px-1 rounded-0 input2">آدرس محل
                                                            سکونت :
                                                            <Form.Control
                                                                type={'text'} className="rounded input2"
                                                                placeholder="آدرس محل سکونت "
                                                                aria-describedby="basic-addon19"
                                                            />
                                                        </InputGroup.Text>
                                                    </div>
                                                    {/*<div className={'d-flex justify-content-between px-0 px-md-1 px-lg-1 my-1 input-group'}>
                                                    <InputGroup className=" " onChange={(e)=>handleValues(e , 'previousCertificationType' )}>
                                                        <InputGroup.Text id="basic-addon20" className="col-12 col-md-12 col-lg-6 px-1 rounded-0 input2 input-group-text">نوع مدرک قبلی  :
                                                            <InputGroup.Text className="bg-white px-0 col col-md col-lg d-flex justify-content-around input-group-text input-group-text">
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value="آموزشی" label="آموزشی " name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value="ادواری"  label="ادواری" name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value="کار و دانش"  label="کار و دانش " name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value="تفاهم نامه"  label=" تفاهم نامه " name="group1" type="radio"
                                                                />
                                                            </InputGroup.Text>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                    <InputGroup onChange={(e)=>handleValues(e , 'applicantForManualSkillsBranchDiploma' )}>
                                                        <InputGroup.Text id="basic-addon10" className="col-12 col-md-12 col-lg-6 px-1 rounded-0 input2  input-group-text">متقاضی اخد دیپلم رشته کارودانش  :
                                                            <InputGroup.Text className="bg-white rounded col col-md col-lg d-flex justify-content-around input-group-text">
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value="true" label="می باشم " name="group1" type="radio"
                                                                />
                                                                <Form.Check className="rounded-0 input2 mx-0" inline value={'false'} label="نمی باشم" name="group1" type="radio"
                                                                />
                                                            </InputGroup.Text>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>*/}
                                                    {/*<div className="input-group px-0 col-12 px-md-0 px-lg-1 my-1">
                                                    <InputGroup className="px-0 px-md-0 px-lg-0 my-1">
                                                        <InputGroup.Text id="basic-addon21" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">نام حرفه  :
                                                            <Form.Control onChange={(e)=>handleValues(e , 'skillName')} placeholder=" نام حرفه " className="rounded- input2" aria-describedby="basic-addon21"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon22" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">شماره استاندارد  :
                                                            <Form.Control onChange={(e)=>handleValues(e , 'standardNumber')} placeholder="شماره استاندارد " className="rounded- input2" aria-describedby="basic-addon22"
                                                            />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text id="basic-addon23" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">تاریخ آزمون  :
                                                            <Form.Control onChange={(e)=>handleValues(e, 'examDate')} type={'date'} placeholder=" تاریخ آزمون" className="rounded- input2" aria-describedby="basic-addon23"
                                                            />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>*/}
                                                    {/*<div className="input-group px-0 px-md-1 px-lg-1 my-1">
                                                    <InputGroup.Text id="basic-addon24" className="col-6 col-md-6 col-lg-4 p-1 rounded-0 input2">شماره گواهینامه  :
                                                        <Form.Control onChange={(e)=>handleValues(e , 'LicenceNumber')} type={'number'} placeholder=" شماره گواهینامه  " aria-describedby="basic-addon24" className="establish-Form-Control"
                                                        />
                                                    </InputGroup.Text>
                                                    <InputGroup.Text id="basic-addon25" className="col-6 col-md-6 col-lg-4 p-1 rounded-0 input2">تاریخ صدور گواهینامه  :
                                                        <Form.Control onChange={(e)=>handleValues(e , 'licenceIssuanceDate')} type={'date'} placeholder="تاریخ صدور گواهینامه " aria-describedby="basic-addon25"
                                                        />
                                                    </InputGroup.Text>
                                                    <InputGroup.Text id="basic-addon26" className="col-6 col-md-6 col-lg-2 p-1 rounded-0 input2">نمره کتبی :
                                                        <Form.Control onChange={(e)=>handleValues(e , 'writtenGrade')} placeholder=" نمره کتبی " type={'number'} className="rounded input2" aria-describedby="basic-addon26"
                                                        />
                                                    </InputGroup.Text>
                                                    <InputGroup.Text id="basic-addon26" className="col-6 col-md-6 col-lg-2 p-1 rounded-0 input2">نمره عملی :
                                                        <Form.Control onChange={(e)=>handleValues(e , 'practicalGrade')} placeholder=" نمره عملی " type={'number'} className="rounded input2" aria-describedby="basic-addon26"
                                                        />
                                                    </InputGroup.Text>
                                                </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className="col-12 py-4 mt-5">
                                            <div className="d-flex justify-content-around m-0">
                                                <Form.Group controlId="formFileMultiple1"
                                                    className="mb-3 d-flex align-items-center">
                                                    <Form.Label className=" px-0 py-2 EsFormLable">اصل
                                                        گواهینامه</Form.Label>
                                                    <Form.Control className="bg-primary bgprimary border-0 text-white" type="file"
                                                        multiple />
                                                </Form.Group>
                                                <Form.Group controlId="formFileMultiple2"
                                                    className="mb-3 d-flex align-items-center">
                                                    <Form.Label className="px-0 py-2 EsFormLable">عکس 3*4</Form.Label>
                                                    <Form.Control className="bg-primary bgprimary border-0 text-white" type="file"
                                                        multiple />
                                                </Form.Group>
                                            </div>
                                            <div className="d-flex justify-content-around m-0">
                                                <Form.Group controlId="formFileMultiple3"
                                                    className="mb-3 d-flex align-items-center">
                                                    <Form.Label className=" px-0 py-2 EsFormLable">آپلود
                                                        شناسنامه</Form.Label>
                                                    <Form.Control className="bg-primary bgprimary border-0 text-white" type="file"
                                                        multiple />
                                                </Form.Group>
                                                <Form.Group controlId="formFileMultiple4"
                                                    className="mb-3 d-flex align-items-center">
                                                    <Form.Label className=" px-0 py-2 EsFormLable">آپلود کدملی</Form.Label>
                                                    <Form.Control className="bg-primary bgprimary border-0 text-white" type="file"
                                                        multiple />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-4">
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <Link to="/Established5" className=" rounded-0 ">
                                                <button
                                                    className="btn btn-success rounded-0 px-5 py-2 mx-4">
                                                    ثبت درخواست
                                                </button>

                                            </Link>
                                        </div>
                                        {/* <div>
                                            <Link to="/Established-1" className="btn btn-danger rounded-0 px-5 py-2 mx-4">
                                                نظر کارشناس
                                            </Link>
                                        </div> */}
                                    </div>
                                    {/* <p className='bg-success text-white text-center p-3 my-4 mx-5'> ثبت درخواست شما با
                                        موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <Link to="/ServiceDesk"
                                            className='text-danger'>میز
                                            خدمت</Link> می توانید پیگیری نمایید
                                    </p> */}
                                </div>
                            </form>
                        }

                    </div>
                </div>
            </LayoutUser>
        </>
    );
} ) )

export default Established;