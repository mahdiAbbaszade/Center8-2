import React,{useEffect} from 'react'
import LayoutAdmin from '../layout/LayoutAdmin'
import TabVeiws4 from './TabVeiws4'

const TamdidNatije = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <LayoutAdmin>
            <div className=' pb-4'>
                <p className='p-4' style={{ fontSize: '24px' }}>
                    سال تاریخ گواهی نامه خود را انتخاب کنید
                </p>
                <div className="d-flex mx-5 justify-content-center btn-group" role="group" aria-label="Basic radio toggle button group" >
                    <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio1"> تاریخ گواهی نامه 90 به پایین </label>

                    <input type="radio" className=" rounded-0 mx-3 btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label className=" rounded-0 mx-3 btn btn-outline-primary" for="btnradio2"> تاریخ گواهی نامه 90 به پایین  </label>
                </div>
                <div className='py-4'>
                    <TabVeiws4 />
                </div>
                <div className='mx-5 border-top'>
                    <div className='text-center bg-white border my-4 p-3' style={{ height: "250px", fontSize: "24px" }}>
                        <p className='fw-bold p-3 border bg-primary bgprimary border-0'>
                            نتیجه آزمون شما
                        </p>
                    </div>
                </div>
                <div>
                    <p className='bg-info p-2 text-center mx-5'>
                        کاربر گرامی با توجه به قبولی شما در آزمون ، جهت صدور گواهی نامه هزینه صدور گواهی را پرداخت نمایید
                    </p>
                    <p className='bg-danger p-2 text-center mx-5'>
                        کاربر گرامی با توجه به مردوی شما در آزمون ، برای انجام دوباره آزمون به صفحه اول مراجعه فرمایید
                    </p>
                </div>
                <div className='text-start py-2'>
                    <button className='px-5 py-2 mx-5 btn btn-primary bgprimary border-0 rounded-0'> پرداخت </button>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default TamdidNatije