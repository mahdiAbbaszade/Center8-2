import React from 'react'
import { Button } from 'react-bootstrap'


const BoxCode = () => {
    return (
            <div className='d-flex w-100 justify-content-center text-center'>
                <div className='d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 h100'>
                    <div className='boxpass justify-content-center text-center m-1 p-3'>
                        <div className='d-flex py-2'>
                            <input className='form-control rounded-0 shadowPass' placeholder=' لطفا کد را وارد کنید' />
                        <Button className='btn rounded-0 shadowPass'> ارسال </Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BoxCode