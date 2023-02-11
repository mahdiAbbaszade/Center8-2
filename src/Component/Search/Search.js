import React from 'react'

const Search = () => {
    return (
        <div>
            <div className='p-3 py-4 bg-light'>
                <div className='justify-content-center px-5'>
                    <p className='border rounded text-center p-3 border border-dark fw-bold bg-secondary bg-opacity-50'> نتایج جستجو </p>
                </div>
                <div className='px-5'>
                    <div className='p-2 border'>
                        <div className='border-bottom'>
                            <p className='fw-bold'> 1 </p>
                            <h6>* جستجوی اول </h6>
                        </div>
                        <div className='p-2 '>
                            <p className='fw-bold'> 2 </p>
                            <h6>* جستجوی دوم </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search