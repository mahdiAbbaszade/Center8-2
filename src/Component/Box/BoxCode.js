import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactCodeInput from 'react-verification-code-input';


const BoxCode = () => {
    return (
        <div className='d-flex w-100 justify-content-center text-center'>
            <div className='d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 h100'>
                <div className='boxpass justify-content-center text-center m-1 p-3'>
                    <div className='d-flex flex-column text-center mx-auto py-2'>
                        <ReactCodeInput fields={5} className='rounded-0 d-flex justify-content-end KhatKhat' />
                        <Link to="/BoxPass" className='btn rounded-0 shadowPass w-25 mx-auto my-3'> ارسال </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxCode