import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import LayoutAdmin from '../layout/LayoutAdmin'
import TabVeiws4 from './TabVeiws4'
import TamdidTable from './TamdidTable'

const Tamdid = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

  return (
    <LayoutAdmin>
        <div className=''>
            <div>
                <p className='p-4' style={{fontSize:'24px'}}>
                    سال تاریخ گواهی نامه خود را انتخاب کنید 
                </p>
                  <div className="d-flex mx-5 justify-content-center btn-group" role="group" aria-label="Basic radio toggle button group" >
                    <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio1"> تاریخ گواهی نامه 90 به بالا </label>

                    <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio2"> تاریخ گواهی نامه 90 و 90 به پایین  </label>
                </div>
                <div className='py-4'>
                    <TabVeiws4 />
                </div>
                  <TamdidTable />
                <div className='d-flex flex-column  mx-5'>
                      <div className='d-flex my-3 border-bottom pb-3'>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                            <div className='col-6'>
                              <div className='fw-bold'><p>اصل گواهینامه</p></div>
                              <div className=''>
                                <label className='text-white bgprimary border-0 px-2 py-1 my-4'>آپلود فایل</label>
                                <input type="file" />
                              </div>
                            </div>
                            <div className='col-5 mb-4 bg-secondary bg-opacity-75'>
                            </div>
                          </div>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                              <div className='col-6'>
                                  <div className='fw-bold'><p>آپلود کارت ملی </p></div>
                                  <div className=''>
                                      <label className='text-white bgprimary border-0 px-2 py-1 my-4'>آپلود فایل</label>
                                      <input type="file" />
                                  </div>
                              </div>
                              <div className='col-5 mb-4 bg-secondary bg-opacity-75'>
                              </div>
                          </div>
                      </div>
                      <div className='d-flex my-3 border-bottom pb-3'>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                              <div className='col-6'>
                                  <div className='fw-bold'><p>عکس 4*3 </p></div>
                                  <div className=''>
                                      <label className='text-white bgprimary border-0 px-2 py-1 my-4'>آپلود فایل</label>
                                      <input type="file" />
                                  </div>
                              </div>
                              <div className='col-5 mb-4 bg-secondary bg-opacity-75'>
                              </div>
                          </div>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                              <div className='col-6'>
                                  <div className='fw-bold'><p>آپلود شناسنامه </p></div>
                                  <div className=''>
                                      <label className='text-white bgprimary border-0 px-2 py-1 my-2'>آپلود فایل</label>
                                      <input type="file" />
                                  </div>
                              </div>
                              <div className='col-5 mb-4 bg-secondary bg-opacity-75'>
                              </div>
                          </div>
                      </div>
                      <div className='d-flex my-3'>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                              <div className='col-6'>
                                  <div className='fw-bold'><p>تصویر سوابق آزمونی </p></div>
                                  <div className=''>
                                      <label className='text-white bgprimary border-0 px-2 py-1 my-2'>آپلود فایل</label>
                                      <input type="file" />
                                  </div>
                              </div>
                              <div className='col-5 mb-2 bg-secondary bg-opacity-75'>
                              </div>
                          </div>
                          <div className='p-1 col-6 d-flex justify-content-center'>
                              <div className='col-6'>
                                  <div className='fw-bold'><p className='m-0'>تعهد محضری </p>                               
                              <small>در صورت مفقود شدن گواهینامه</small> 
                                  </div>
                                  <div className=''>
                                      <label className='text-white bgprimary border-0 px-2 py-1 my-2'>آپلود فایل</label>
                                      <input type="file" />
                                  </div>
                              </div>
                              <div className='col-5 mb-2 bg-secondary bg-opacity-75'>
                              </div>
                          </div>
                      </div>
                </div>
                  <div className='text-start mt-2 mb-4'>
                      <Link to="/TamdidTaeid">
                          <button className='btn btn-primary bgprimary border-0 mx-5 px-3 rounded-0'> ثبت درخواست </button>
                    </Link>
                  </div>
                  <p className='bg-success text-white text-center p-3 mb-4 mx-5'> ثبت درخواست شما با موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <span  className='text-danger fw-bold fs-5'> داشبورد </span> می توانید پیگیری نمایید
                  </p>
            </div>
        </div>
    </LayoutAdmin>
  )
}

export default Tamdid