import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LayoutAdmin from '../../layout/LayoutAdmin'


const AdminOkTable2 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )


    return (
        <LayoutAdmin>
            <div className='container-fluid p-5 m-0 my-2 mb-4'>
                <div className='p-5 bg-success rounded'>
                    <p className='text-white fw-bold'>
                        مدارک و مشخصات درخواست کننده تایید شد .
                    </p>
                </div>
                <div className='mt-5 pt-5 d-flex'>
                    <Link to="/Admin" className='btn bg-primary bgprimary border-0 text-white fw-bold col-auto me-auto '> بازگشت به داشبورد </Link>
                </div>
            </div>
        </LayoutAdmin>
    )
}


export default AdminOkTable2