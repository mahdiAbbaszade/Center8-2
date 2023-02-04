import React from 'react';

const TableEstablished4 = () => {
    return (
        <>
            <div className='table-responsive d-flex justify-content-center px-5'>
                <table className='table table-sm w-50 table-bordered table-hover align-middle table3'>
                    <thead>
                        <tr className='text-center'>
                            <th>ردیف</th>
                            <th>مشخصات فنی</th>
                            <th>تعداد</th>
                            <th>شماره</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-center'>1</td>
                            <td>رایانه</td>
                            <td className='text-center'> یک دستگاه </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td className='text-center'>2</td>
                            <td> میز و صندلی </td>
                            <td className='text-center'> یک سری </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td className='text-center'>1</td>
                            <td> دستگاه های اطفاء حریق </td>
                            <td className='text-center'> یک سری </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableEstablished4;