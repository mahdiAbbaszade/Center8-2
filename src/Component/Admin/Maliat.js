import React,{useEffect} from 'react'
import LayoutAdmin from '../layout/LayoutAdmin'
import Tabveiws2 from './TabVeiws2'

const Maliat = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (
    <LayoutAdmin>
        <div>
            {/* <Tabveiws2/> */}
            <div className='mt-5 pb-5'>
                <p className='py-2 px-4 py-3 bg-secondary bg-opacity-10 text-primary mx-3'>
                    برای طرح معافیت مالیاتی بعد از انجام امور اداری و اخذ نامه از اداره مالیات ، نامه درخواست خود را آپلود کرده و منتظر تاییدیه از طرف مرکز باشید 
                </p>
                <div className='d-flex justify-content-around mx-3 mt-5 mb-3 bg-white p-3'>
                      <div className='p-3 pe-4'>
                          <p style={{fontSize: '25px'}} className=''>تصویر نامه مالیاتی خود را در این قسمت آپلود کنید</p>
                          <p className=' text-secondary opacity-75'>حجم تصویر کمتر از 800 کیلو بایت باشد</p>
                          <p className=' text-secondary opacity-75'>سایر ابعاد تصویر 128*600 باشد</p>
                          <label>
                              آپلود فایل : { ' ' }
                          <input type="file" value="" />
                          </label>
                      </div>
                      <div className='col-3 bg-secondary bg-opacity-25'>
                        <p className='pppp m-0'>
                        </p>
                      </div>
                </div>
                <div className='px-3'>
                  <textarea className="form-control my-3 mx-auto rounded-0" id="Textarea1" rows="5" placeholder=' توضیحات '>
                  </textarea>
                </div>
          <div className='d-grid col-2 me-auto ms-5'>
            <button className='btn btn-success my-2 rounded-0 '> ثبت درخواست </button>

          </div>
            </div>
        </div>

    </LayoutAdmin>
  )
}

export default Maliat