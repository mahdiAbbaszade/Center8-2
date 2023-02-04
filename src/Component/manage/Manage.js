import { Modal } from 'bootstrap';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LayoutColleague from '../layout/LayoutColleague';
import LayoutManage from '../layout/LayoutManage';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';
import Modal2 from '../manage/ManageModal';

const Manage = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  const [lgShow2, setLgShow2] = useState( false );

  return (

    <LayoutManage>
      <Modal2 lgShow2={lgShow2} setLgShow2={setLgShow2} />

      <div className=' container-fluid px-0 py-3 m-0'>
        <div className='d-flex justify-content-around px-1'>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 bg-info bg-opacity-50 text-dark fw-bold mb-3'> پرونده جدید </div>
            <div className="col-12 d-flex align-items-center bg-primary bgprimary border-0 py-2 my-2 rounded">
              <form className='d-flex align-items-center form-control bg-transparent border-0'>
                <input type="search" className='form-control SerInput p-1' placeholder='کدپیگیری را وارد کنید' />
                <button className='border-0 bg-transparent'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-white mx-2'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست ارجاع به بخش تاسیس </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 26-0611933 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/10/04</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>11:35</span>
                  </div>
                </div>
              </div>
              {/* <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span> */}
              <Link to="/ManageAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> در انتظار پذیرش </span>
              </Link>
              {/* <button className='d-grid col-4 me-auto btn btn-success border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> تایید درخواست </span>
              </button>
              <button className='d-grid col-4 me-auto btn btn-danger border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> رد درخواست </span>
              </button> */}
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست ارجاع به تاسیس </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 85370101 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/11/15</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>10:15</span>
                  </div>
                </div>
              </div>
              {/* <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span> */}
              <Link to="/ManageAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> در انتظار پذیرش </span>
              </Link>
              {/* <button className='d-grid col-4 me-auto btn btn-success border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> تایید درخواست </span>
              </button>
              <button className='d-grid col-4 me-auto btn btn-danger border-0 m-0 p-1 px-1 ms-0 my-1 btn-absolute1'><span className=''> رد درخواست </span>
              </button> */}
            </div>
          </div>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 justify-content-between d-flex bg-info bg-opacity-50 text-dark mb-3'>
              <span className='fw-bold'> گردش کار پرونده ها  </span><span className='text-primary ms-5'> </span>
            </div>
            <div className="col-12 d-flex align-items-center bg-primary bgprimary border-0 py-2 my-2 rounded">
              <form className='d-flex align-items-center form-control bg-transparent border-0'>
                <input type="search" className='form-control SerInput p-1' placeholder='کدپیگیری را وارد کنید' />
                <button className='border-0 bg-transparent'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-white mx-2'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position2'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> تمدید گواهی نامه </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 30-0551148 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/09/30</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>09:45</span>
                  </div>
                </div>
              </div>
              {/* <span className=' fromto m-0 text-warning fw-light rounded'> پوشه پرونده شما خالی است </span>
              <span className=' fromto m-0 text-success fw-light rounded'>یک گردش کار پرونده در پوشه شما است </span> */}
              <button onClick={() => setLgShow2( true )} className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 ms-0 my-2 btn-absolute'>
                <span> امضا و ارجاع به  </span>
              </button>
              <Link to="/ManageAccept2" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 ms-0 my-2 btn-absolute'>
                <span> ادامه گردش کار  </span>
              </Link>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position2'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست شعبه </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 30-0555811 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/10/07</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>11:05</span>
                  </div>
                </div>
              </div>
              {/* <span className=' fromto m-0 text-warning fw-light rounded'> پوشه پرونده شما خالی است </span>
              <span className=' fromto m-0 text-success fw-light rounded'>یک گردش کار پرونده در پوشه شما است </span> */}
              <button onClick={() => setLgShow2( true )} className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 ms-0 my-2 btn-absolute'>
                <span> امضا و ارجاع به  </span>
              </button>
              <Link to="/ManageAccept2" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 ms-0 my-2 btn-absolute'>
                <span> ادامه گردش کار </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutManage>
  )
}

export default Manage;