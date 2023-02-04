import * as Icon from 'react-bootstrap-icons';
import React, { useState }from 'react';

import { tableData } from './Comment';
import { DitModal } from './DitModal';

// import { modalCommentContext } from '../../contexts/ModalCommentContext';

const TableEstablished3 = () => {
    // const { modalComment, setModalComment } = useContext( modalCommentContext )
    const [detils, setDetils]=useState({})
    const [show, setShow] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = (item) => {
        setDetils(item)
        setShow( true )
    };


    return (
        <>

{/*  */}

{/*  */}


            <div className='table-responsive table-responsive-lg px-5'>
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
                            <th>توضیحات بیشتر </th>
                            <th>انتخاب استاندارد </th>
                        </tr>
                        {
                            tableData.map(item=>(
                                <tr>
                                    <th>{item.name}</th>
                                    <td>{item.description}</td>
                                    <td> {item.date} </td>
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

                                    <td> 50 </td>
                                    {/* onClick={() => setModalComment( { ...modalComment, modalComment: true } )} */}
                                    <td>
                                        <button onClick={()=>handleShow(item)} className=" bg-transparent border-0 rounded-3 px-4 px-md-4 px-lg-4 px-xl-5 py-2">
                                            <span className=' text-primary'><Icon.Back /></span>
                                        </button>
                                        {/* <button className=" bg-transparent border-0 rounded-3 px-4 px-md-4 px-lg-4 px-xl-5 py-2">
                                    <span className='text-primary'><Icon.Back /></span>
                                </button> */}

                                    </td>
                                    <td> <input id="" name="" type="checkbox" value="" /> </td>
                                </tr>
                            ))
                        }
                       
                       
                    </tbody>
                </table>
            </div>
            <DitModal show={show} handleClose={handleClose} detils={detils}/>
        </>
    );
}

export default TableEstablished3;