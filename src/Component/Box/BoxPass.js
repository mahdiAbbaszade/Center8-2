import React from 'react'
import { Button } from 'react-bootstrap'

const BoxPass = () => {
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 h100'>
            <div className='boxpass justify-content-center text-center m-1 p-3'>
                <input className='form-control rounded-0 my-3 py-2 shadowPass' type="text" maxLength='20' placeholder=' لطفا پسورد جدید را وارد کنید' />
                <input className='form-control rounded-0 my-3 py-2 shadowPass' type="text" maxLength='20' placeholder=' لطفا پسورد جدید را دوباره وارد کنید' />
                <div className='text-start py-2'>
                    <Button className='btn btn-primary rounded-0 shadowPass'> تایید </Button>
                </div>
            </div>
        </div>
    )
}

export default BoxPass