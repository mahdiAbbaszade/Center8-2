import React from 'react';
import Image1 from '../../img/image3.png';
import Image2 from '../../img/image5.png';
import Image3 from '../../img/armSazman.png';

const ThirdAction = () => {
  return (
    <>
        <div className='d-none d-md-flex justify-content-evenly bgsecondary mt-5 mb-2 pt-3 pb-4'>
            <div className='col-2 col-md-3 text-center'><img className='institution' src={Image3} alt='نهادهای مربوطه' /> </div>
            <div className='col-2 col-md-3 text-center'><img src={Image1} alt='نهادهای مربوطه' /> </div>
            <div className='col-2 col-md-3 text-center'><img src={Image2} alt='نهادهای مربوطه' /> </div>
        </div>
    </>
  )
}

export default ThirdAction;