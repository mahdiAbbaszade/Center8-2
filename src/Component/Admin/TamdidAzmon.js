import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import LayoutAdmin from '../layout/LayoutAdmin'
import TabVeiws4 from './TabVeiws4'

const TamdidAzmon = () => {

  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (
    <LayoutAdmin>
      <div className='pb-5'>
        <p className='p-4' style={{ fontSize: '24px' }}>
          سال تاریخ گواهی نامه خود را انتخاب کنید
        </p>
        <div className="d-flex mx-5 justify-content-center btn-group" role="group" aria-label="Basic radio toggle button group" >
          <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
          <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio1"> تاریخ گواهی نامه 90 به پایین </label>

          <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
          <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio2"> تاریخ گواهی نامه 90 به پایین  </label>
        </div>
        <div className='py-4 border-bottom mx-3'>
          <TabVeiws4 />
        </div>
        <div className='text-center border mx-5 my-5 p-4 tamdidp'>
          <p className='p-5 mx-5 my-0 bg-info bg-opacity-50 rounded'>
            <p className='text-primary fw-bold border border-primary p-4 m-0'>
            کاربر گرامی تاریخ برگزاری آزمون برق شما در تاریخ 1401-09-09 در ساعت 10:30  در محل ساختمان فنی حرفه ای شمیرانات به آدرس ولنجک .... برگزار خواهد شد
            </p>
          </p>
        </div>
        <div className='text-start my-5'>
          <Link to="/TamdidNatije">
            <button className=' mx-5 rounded-0 btn btn-success'> دیدن نتیجه آزمون </button>
          </Link>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default TamdidAzmon