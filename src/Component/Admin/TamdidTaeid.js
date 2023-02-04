import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import LayoutAdmin from '../layout/LayoutAdmin'
import TabVeiws4 from './TabVeiws4'

const TamdidTaeid = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (
    <LayoutAdmin>
      <div className=''>
        <p className='p-3 bg-info my-4 mx-4 border border-dark' style={{ fontSize: '24px' }}>
          سال تاریخ گواهی نامه خود را انتخاب کنید
        </p>
        <div className="d-flex mx-5 justify-content-center btn-group" role="group" aria-label="Basic radio toggle button group" >
          <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
          <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio2"> تاریخ گواهی نامه 90  و 90 به بالا  </label>

          <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
          <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio1"> تاریخ گواهی نامه 90 به پایین </label>
        </div>

        <div className='py-4'>
          <TabVeiws4 />
        </div>

        <div className='mt-3 d-flex flex-column justify-content-center f-check-confirmation mx-5 text-center'>
          <div className='border border-2 border-success py-4 px-3 mt-5 check-confirmation'>
            <div className='px-2'>
              <p className='text-success fw-bold m-0'>
                مدارک و درخواست شما توسط کارشناس مربوطه تایید شد
              </p>
            </div>
          </div>
          <p className=' bg-info mx-auto my-4 py-3 col-8'>لطفا از این قسمت پرداخت نمایید</p>
        </div>

        <div className='text-center my-4'>
          <button className='btn btn-primary bgprimary border-0 rounded-0 px-4 mx-5'> پرداخت </button>
        </div>
        <div className='my-5'>
          <p className='text-center fw-bold border-top mx-5 pt-3 border-dark'>
            کاربر گرامی پس از پرداخت هزینه ثبت نام تعویض و تمدید گواهی نامه رسید پرداخت را در قسمت مربوطه آپلود نمایید
          </p>
        </div>
        <div className='mx-5 mt-3 mb-5 p-5 bg-secondary bg-opacity-50 justify-content-center align-items-center'>
          <div className='p-5 mx-auto shadow-lg w-50 border d-flex flex-column justify-content-center align-items-center'>
            <input type="file" />
            <label className='text-white my-3 bg-primary bgprimary border-0 p-3'>آپلود رسید پرداخت </label>
          </div>
          <div className='text-center mt-5'>
            <small className='bg-danger py-3 px-5 text-white fw-bold'> اطلاعات شما توسط کارشناس مربوطه به شما اعلام خواهد شد </small>
          </div>
        </div>
        <div className='text-start ps-5 mb-2'>
          <Link to="/TamdidAzmon">
            <button className='btn btn-primary bgprimary border-0 rounded-0 px-5 py-2'> ثبت درخواست</button>
          </Link>
        </div>
        <p className='bg-success text-white text-center p-3 mb-4 mx-5'> ثبت درخواست شما با موفقیت انجام شد ، کد پیگیری شما ...... است ، از قسمت <span to="/ServiceDesk" className='text-danger'> داشیورد </span> می توانید پیگیری نمایید
        </p>
        <p className='bg-danger text-white text-center p-3 mb-4 mx-5'> ثبت درخواست شما توسط کارشناس رد شده است . علت رد، آپلود شناسنامه ناقص است ، لطفا اصلاح نمایید . <Link to="/Tamdid" className=' text-primary'> بازگشت و اصلاح </Link>
        </p>
      </div>
    </LayoutAdmin>
  )
}

export default TamdidTaeid