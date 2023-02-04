import React from 'react'
import LayoutAdmin from '../layout/LayoutAdmin'
import ProfileImg from '../../img/130.jpg'

const ProfileAdmin = () => {
  return (
    <LayoutAdmin>
      <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
        <div className='text-black border border-2 p-3 mt-1 mb-3 opop'>
          <div className='d-flex justify-content-between '>
            <div className='col-4 d-flex align-items-center justify-content-center py-1'>
              <p className='align-items-center border-start border-dark px-5 my-0 '>
                <img className='rounded-circle ImgProfile' src={ProfileImg} alt="profile" />
              </p>
            </div>
            <div className='col-8 d-flex align-items-center'>
              <div className='d-flex flex-column justify-content-center m-0'>
                <div className='d-flex my-2 p-0'>
                  <p className=' fw-bold ms-3'>نام آموزشگاه : </p>
                  <p> امیدان فردا </p>
                </div>
                <div className='d-flex my-2 p-0'>
                  <p className=' fw-bold ms-3'>نام موسس آموزشگاه : </p>
                  <p> خانم مینا مهرنوش </p>
                </div>
                <div className='d-flex my-2 p-0'>
                  <p className=' fw-bold ms-3'>شماره ثبت آموزشگاه : </p>
                  <p> 35687 </p>
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
                  <p className=' fw-bold p-2 ms-2 my-0'>نام آموزشگاه : </p>
                  <p className='my-0'> امیدان فردا </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>کدپستی : </p>
                  <p className='my-0'> 57154332 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>شماره تماس ثابت  : </p>
                  <p className='my-0'> 021-35351212 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>شماره تلفن همراه  : </p>
                  <p className='my-0'> 9136587 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'>شناسه آموزشگاه  : </p>
                  <p className='my-0'> 3265698 </p>
                </div>
                <div className='d-flex bg-warnin bg-opacity-25 align-items-center my-2 shadow shadow-sm border border-1 border-secondary ulpp'>
                  <p className=' fw-bold p-2 ms-2 my-0'> آموزشگاه ویژه :   </p>
                  <p className='my-0 d-flex'>
                    <span className='d-grid col px-4 mx-1 my-1 py-1 rounded border border-2 shadow-sm'>خوهران</span>
                    <span className='d-grid col px-4 mx-1 my-1 py-1 rounded border border-2 shadow-sm'>برادران</span>
                    <span className='d-grid col px-4 mx-1 my-1 py-1 rounded border border-2 bg-primary bgprimary border-0'>هردو</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-3'>
          <div className='border border-2 p-2'>
            <fieldset className=''>
              <legend className='bg-primary bgprimary border-0 fw-bold p-2'> رشته های فعالیت آموزشگاه </legend>
              <p className='m-0 p-4 border rounded'>
                <ul>
                  <li className='my-1'>صنایع شیمیایی</li>
                  <li className='my-1'>صنایع کاربردی</li>
                  <li className='my-1'>صنایع مواد آلی</li>
                  <li className='my-1'>صنایع مواد تجدیدناپذیر</li>
                </ul>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default ProfileAdmin