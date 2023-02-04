import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LayoutManage from '../../layout/LayoutManage'

const ManageCancel = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (
    <LayoutManage>
      <div className='container-fluid p-5 m-0 my-2 mb-4'>
        <div className='d-flex flex-column p-5 bg-warning rounded'>
          <p className='text-white fw-bold'>
            کارشناس محترم لطفا علت رد درخواست را در کادر پایین اعلام نمایید
          </p>
          <input type="text" placeholder='علت رد درخواست' className='form-control my-2' />
          <button className='btn btn-danger me-auto'> رد درخواست </button>
        </div>

        <div className='mt-5 pt-5 d-flex'>
          <Link to="/Manage" className='btn bg-primary bgprimary border-0 text-white fw-bold col-auto me-auto '> بازگشت به داشبورد </Link>
        </div>
      </div>
    </LayoutManage>
  )
}

export default ManageCancel