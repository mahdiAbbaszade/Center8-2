import React from 'react';

const TableEstablished2 = () => {
    return ( 
        <>
            <div className='table-responsive px-5'>
                <p className='text-center bg-secondary border border-1 border-dark opacity-75 text-black m-0 p-2'> جدول گروه های درسی برنامه درسی 65گانه </p>
                <table className='table table-bordered border-dark table-hover align-middle'>
                    <thead>
                        <tr className='bg-secondary opacity-75 text-black'>
                            <th className='col-1' >ردیف</th>
                            <th className='col-5' >عنوان گروه</th>
                            <th className='col-1' >ردیف</th>
                            <th className='col-5' >عنوان گروه</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                            <p className='text-center w-100 m-0'>  صنایع خودرو </p>
                            </td>
                            <th>2</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                            <p className='text-center w-100 m-0'> الکترونیک </p>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'>  صنایع چوب </p>
                            </td>
                            <th>4</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> صنایع کاغذ </p>
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> جوشکاری </p>
                            </td>
                            <th>6</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> حمل و نقل زمینی </p>
                            </td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> حمل و نقل دریایی </p>
                            </td>
                            <th>8</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> حمل و نقل ریلی </p>
                            </td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> تاسیسات </p>
                            </td>
                            <th>10</th>
                            <td className='d-flex'> <input className='m-2 me-3' id="Farmer" name="khoshe" type="checkbox" value="" />
                                <p className='text-center w-100 m-0'> صنایع دریایی </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default TableEstablished2 ;