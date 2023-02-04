import React from 'react'
import LayoutManage from '../layout/LayoutManage'

const KHabarManage = () => {
  return (

    <LayoutManage>
      <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
        <div className='p-1'>
          <h5 className='p-4 fw-bold bg-secondary bg-opacity-50'> درج اخبار و اطلاعیه ها </h5>
        </div>
        <div className='p-3 my-3 bg-white border'>
          <h6 className='p-1 fw-bold my-2'> عنوان خبر :</h6>
          <input type="text" className='form-control my-3 p-3' placeholder=' عنوان خبر را وارد کنید'/>
          <h6 className='p-1 fw-bold my-2'> توضیحات خبر : </h6>
          <input type="text" className='form-control my-3 p-3' placeholder=' توضیحات خبر را وارد کنید'/>
          <h6 className='p-1 fw-bold my-2'> عکس خبر : </h6>
          <input type="file" className='form-control my-3 p-3' placeholder=' عکس خبر را وارد کنید'/>
          <div className='text-start'>
          <button className='btn btn-success px-5'> ثبت خبر </button>
          </div>
        </div>
      </div>
    </LayoutManage>
  )
}

export default KHabarManage