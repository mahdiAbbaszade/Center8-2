import React from 'react'
import Zamani from '../../img/New/zamani.jpg'
import LayoutManage from '../layout/LayoutManage'

const ProfileManage = () => {
  return (

    <LayoutManage>
      <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
        <div className='text-black border border-2 p-3 mt-1 mb-3 opop'>
          <div className='d-flex justify-content-between '>
            <div className='col-4 d-flex align-items-center justify-content-center py-1'>
              <p className='align-items-center border-start border-dark px-5 my-0 '>
                <img className='rounded-circle ImgProfile' src={Zamani} alt="profile" />
              </p>
            </div>
            <div className='col-8 d-flex align-items-center'>
              <div className='d-flex flex-column justify-content-center m-0'>
                <div className='d-flex my-2 p-0'>
                  <p className=' fw-bold ms-3'>نام  : </p>
                  <p> سحن  </p>
                </div>
                <div className='d-flex my-2 p-0'>
                  <p className=' fw-bold ms-3'>نام خانوادگی : </p>
                  <p> زمانی </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='col-12'>
            <div className='p-3 border border-2'>
              <div className=''>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>کد ملی : </p>
                  <p className='my-0'> 279078016 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'> کد پرسنلی  : </p>
                  <p className='my-0'> 98-1065 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>شماره تلفن همراه  : </p>
                  <p className='my-0'> 09101010101 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'> سِمت : </p>
                  <p className='my-0'> کارشناس رسمی </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='my-3'>
          <div className='border border-2 p-2'>
            <fieldset className=''>
              <legend className='bg-primary bgprimary border-0 fw-bold p-2'> زمینه های کارشناسی </legend>
              <p className='m-0 p-4 border rounded'>
                <ul>
                  <li className='my-1'> تاسیس  </li>
                  <li className='my-1'> کارشناس تمدید  </li>
                </ul>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </LayoutManage>
  )
}

export default ProfileManage