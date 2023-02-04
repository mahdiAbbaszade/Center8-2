import React from 'react'
import { Link } from 'react-router-dom'
 import LayoutManage from '../../layout/LayoutManage'

const ManageAcceptTable2 = () => {
    return (
        <LayoutManage>
            <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
                <div className='my-2 mb-1'>
                    <p className='bg-info fw-bold m-0'>
                        <label className='p-3 text-white'> خوشه های انتخاب شده : </label>
                    </p>
                    <div className='d-flex py-3 m-0 my-2'>
                        <label className='px-2 py-2 bg-primary bgprimary border-0 text-white rounded mx-1' for="Farmer"> همه خوشه ها </label>
                        <label className='px-2 py-2 bg-danger text-white rounded mx-1' for="Farmer">خوشه کشاورزی </label>
                        <label className='px-2 py-2 bg-primary bgprimary border-0 text-white rounded mx-1' for="Culture">خوشه فرهنگ و هنر</label>
                        <label className='px-2 py-2 bg-primary bgprimary border-0 text-white rounded mx-1' for="industry">خوشه صنعت </label>
                        <label className='px-2 py-2 bg-primary bgprimary border-0 text-white rounded mx-1' for="Services">خوشه خدمات</label>
                    </div>
                    <div className=' my-2'>
                        <p className='bg-info fw-bold m-0 my-3'>
                            <label className='p-3 text-white'> استانداردهای انتخاب شده : </label>
                        </p>
                        <table className='table border-dark table-hover align-middle table3'>
                            <tbody className='text-center'>
                                <tr className='text-black'>
                                    <th scope="col">#</th>
                                    <th scope='col'>نام استاندارد </th>
                                    <th scope='col'> کد استاندارد قدیم </th>
                                    <tr className='d-flex w-100 p-0 border-0'>
                                        <th className='w-100 p-2' scope='col' colSpan="6"> ISCO </th>
                                    </tr>
                                    <tr className='d-flex p-0 border border-dark justify-content-center'>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 '> نسخه </th>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 bg-info'> کد شایستگی </th>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 bg-danger'> کد شغل </th>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 bg-warning'> کد گروه </th>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 '> سطح مهارت </th>
                                        <th colSpan="" className='flex-grow-1 flex-shrink-1 col-1 border-0 px-3 bg-primary bgprimary border-0'> ISCO کد </th>
                                    </tr>
                                    <th>جمع ساعت </th>
                                </tr>
                                <tr>
                                    <th> # </th>
                                    <td> تکنسین ارزیاب قطعات </td>
                                    <td> 4-40/30/1 </td>
                                    <td className='d-flex flex-row justify-content-between border-0 border-dark p-0'>
                                        <td className='col-1 d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-center border-0 py-2'>
                                            <p className=' m-0 col-1-1 border-0 p-0 py-4'>1</p>
                                        </td>
                                        <td className='col-1 bg-info d-flex flex-row flex-grow-1 flex-shrink-1 border-0'>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>1</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>2</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>3</p>
                                        </td>
                                        <td className='col-1 bg-danger d-flex flex-row flex-grow-1 flex-shrink-1 border-0 bg-danger'>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>1</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>2</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>3</p>
                                        </td>
                                        <td className='col-1 d-flex flex-row flex-grow-1 flex-shrink-1 border-0 bg-warning'>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>5</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>6</p>
                                            <p className='border-end border-dark m-0 col-4 p-0 py-4'>7</p>
                                        </td>
                                        <td className='col-1 d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-center border-end border-start border-dark p-0 py-4'>8</td>
                                        <td className='col-1 d-flex flex-row flex-grow-1 flex-shrink-1 border-0 bg-primary bgprimary border-0'>
                                            <p className=' border-dark m-0 col-3  p-0 py-4'>9</p>
                                            <p className='border-end border-dark m-0 col-3 p-0 py-4'>10</p>
                                            <p className='border-end border-dark m-0 col-3 p-0 py-4'>11</p>
                                            <p className='border-end border-dark m-0 col-3 p-0 py-4'>12</p>
                                        </td>
                                    </td>
                                    <td> 120 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='d-flex border-top m-2 p-3'>
                    <Link to="/ManageOkTable2" className='fw-bold bg-opacity-75 bg-success btn m-1'> تایید درخواست </Link>
                    <Link to="/ManageCancel" className='fw-bold bg-opacity-75 bg-danger btn m-1'> رد درخواست </Link>
                    <Link to="/Manage" className='fw-bold bg-opacity-75 bg-info btn me-auto my-0'> بازگشت </Link>
                </div>
            </div>
        </LayoutManage>
    )
}


export default ManageAcceptTable2