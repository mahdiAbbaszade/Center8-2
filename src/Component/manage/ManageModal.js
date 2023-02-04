import React from 'react'
import Modal from 'react-bootstrap/Modal'

const Modal2 = ( { lgShow2, setLgShow2 } ) => {

    const OnClose = () => setLgShow2( false )

    return (
        <>
            <Modal
                size="lg"
                show={lgShow2}
                onHide={OnClose}
            >
                <Modal.Header className='d-flex align-items-center'>
                    <Modal.Title >
                        <p className='m-0'>نامه ارجاع به بخش های مربوطه</p>
                    </Modal.Title>
                    <button className='text-danger me-auto border-0 bg-transparent fw-bold' onClick={OnClose}>X</button>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className='d-flex align-items-center justify-content-between border-bottom p-2'>
                            <div className='d-flex w-100 flex-column'>
                                <div className='border bg-secondary bg-opacity-50 p-2 me-2'>
                                    <span className='fw-bold'> پرونده با کد پیگیری 26-0611933</span>
                                </div>
                                <div>
                                <input className='mx-2' type="checkbox" />
                                <span>ارجاع به بخش کارشناس تمدید</span>
                                </div>
                                <div>
                                    <input className='mx-2' type="checkbox" />
                                    <span> تایید درخواست</span>
                                </div>
                                <div>
                                    <input className='mx-2' type="checkbox" />
                                    <span> رد درخواست </span>
                                </div>
                            </div>
                            {/* <button onClick={OnClose} className='btn btn-outline-info bgprimary border-0 text-white'> ارسال </button> */}
                        </div>
                        <div>
                            {/* <div className='d-flex align-items-center justify-content-between border-bottom p-2'>
                                <div className='d-flex w-75 flex-column'>
                                    <div className='border bg-secondary bg-opacity-50 p-2 me-2'>
                                        <span className='fw-bold'> پرونده با کد پیگیری 85370101</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span>ارجاع به بخش کارشناس تاسیس</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span> تایید درخواست</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span> رد درخواست </span>
                                    </div>
                                </div>
                                <button onClick={OnClose} className='btn btn-outline-info bgprimary border-0 text-white'> ارسال </button>
                            </div> */}
                        </div>
                        <div>
                            {/* <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex w-75 flex-column'>
                                    <div className='border bg-secondary bg-opacity-50 p-2 me-2'>
                                        <span className='fw-bold'> پرونده با کد پیگیری 6719086</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span>ارجاع به بخش کارشناس ثبت</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span> تایید درخواست</span>
                                    </div>
                                    <div>
                                        <input className='mx-2' type="checkbox" />
                                        <span> رد درخواست </span>
                                    </div>
                                </div>
                                <button onClick={OnClose} className='btn btn-outline-info bgprimary border-0 text-white'> ارسال </button>
                            </div> */}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={OnClose} className="btn btn-success">
                        ارسال
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Modal2;