import React, { useEffect } from 'react'
import LayoutAdmin from '../layout/LayoutAdmin';
import { NewsData } from '../Admin/News'
import { Link } from 'react-router-dom';

const Admin = () => {

  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (

    <LayoutAdmin>
      <div className=' container-fluid px-0 py-3 m-0'>
        <div className='d-flex justify-content-around px-3'>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 bg-info bg-opacity-50 text-dark fw-bold mb-3'> اخبار و اطلاعیه ها</div>
            {
              NewsData.map( items => (
                <div className=' d-flex flex-column border rounded px-2 pt-1 pb-1 mb-1 position-relative'>
                  <div className='mt-2 d-flex justify-content-between'>
                    <div className='col d-flex flex-column border text-end p-2'>
                      <div key={items.id} className='d-flex justify-content-around border p-2'>
                        <img src={items.image} alt="1" className='col-3 img-fluid imgNews' />
                        <p className='col-9 m-0 p-2 TextImg'>
                          {items.News}
                        </p>
                      </div>
                      <div className='p-1 text-start fw-bold bg-info bg-opacity-50'>
                        <span>تاریخ : </span><span>{items.Data}</span>
                      </div>
                      <div className='p-1 text-start fw-bold bg-info bg-opacity-50'>
                        <span>ساعت : </span><span>{items.watch}</span>
                      </div>
                    </div>
                  </div>
                  <h6 className='fromto m-0 bg-dark text-danger bg-opacity-25 p-2'> از طرف مرکز 8 زعفرانیه </h6>
                  <Link to={`/DetailedNews/${items.id}`} className='d-grid col-4 me-auto btn bg-success bg-opacity- text-white m-0 p-1 px-1 ms-0 my-1  btn-absolut'>مشاهده خبر</Link>
                </div>
              ) )
            }
          </div>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 justify-content-between d-flex bg-info bg-opacity-50 text-dark mb-3'> <span className='fw-bold'>گردش کار </span><span className='text-primary ms-5'> (10 گردش آخر) </span></div>
            <div className="col-12 d-flex align-items-center bgprimary border-0 py-2 my-2 rounded">
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
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست تاسیس </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 26-06119787 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/11/04</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>12:39</span>
                  </div>
                </div>
              </div>
              <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span>
              <Link to="/AdminAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border  m-0 p-1 px-1 ms-0 my-3 btn-absolute1'><span className=''> درانتظار پذیرش </span> </Link>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست تمدید </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 26-357894 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/09/23</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>09:35</span>
                  </div>
                </div>
              </div>
              <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span>
              <Link to="/AdminAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-3 btn-absolute1'><span className=''> درانتظار پذیرش </span> </Link>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست تاسیس </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 26-125489 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/09/20</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>10:45</span>
                  </div>
                </div>
              </div>
              <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span>
              <Link to="/AdminAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-3 btn-absolute1'><span className=''> درانتظار پذیرش </span> </Link>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست تمدید </p>
                  </div>
                  <div className='my-1 p-1'>
                    <span> کدپیگیری </span><span> 26-4561238 </span>
                  </div>
                </div>
                <div className='col-4 col-md-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>1401/09/15</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>12:30</span>
                  </div>
                </div>
              </div>
              <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span>
              <Link to="/AdminAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-3 btn-absolute1'><span className=''> درانتظار پذیرش </span> </Link>
            </div>
            <div className='d-flex flex-column border rounded px-1 my-1 pt-4 pb-1 position-relative btn-position1'>
              <div className='my-1 mt-2 p-1 py-2 d-flex justify-content-between'>
                <div className='col-8 col-md-7 fw-bold'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <span className='p-1'> پرونده  </span><p className='m-0 p-1 fw-bold'> درخواست تاسیس </p>
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
              <span className='fromto m-0 text-warning w-50 rounded'> پوشه پرونده شما خالی است </span>
              <span className='fromto m-0 text-success w-50 rounded'>یک پرونده جدید در پوشه شما است </span>
              <Link to="/AdminAccept" className='d-grid col-4 me-auto btn btn-primary bgprimary border-0 m-0 p-1 px-1 ms-0 my-3 btn-absolute1'><span className=''> درانتظار پذیرش </span> </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default Admin;

