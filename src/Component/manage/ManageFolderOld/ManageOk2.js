import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LayoutManage from '../../layout/LayoutManage'


const ManageOk2 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )


    return (
        <LayoutManage>
            <div className='container-fluid p-5 m-0 my-2 mb-4'>
                <div className='p-5 bg-success rounded'>
                    <p className='text-white fw-bold'>
                        مدارک و مشخصات درخواست کننده تایید شد .
                    </p>
                </div>
                <div className='mt-5 pt-5 d-flex'>
                    <Link to="/ManageAcceptTable2" className='btn bg-primary bgprimary border-0 text-white fw-bold col-auto me-auto '> مرحله بعدی </Link>
                </div>
            </div>
        </LayoutManage>
    )
}


export default ManageOk2