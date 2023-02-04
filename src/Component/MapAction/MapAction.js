import React from 'react';
// import MapSazman from '../../img/map.jpg';
import Call1 from '../../img/tel.svg';
import Call2 from '../../img/mail.svg';
import Call3 from '../../img/location.svg';

const MapAction = () => {
  return (
    <>
      <div className='container-fluid justify-content-center text-center border my-4 py-5 px-0 px-md-1 px-lg-2 m-0'>
        <div className='col-12'>
          <iframe className='col-10 col-md-10 col-lg-10 '
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1617.788775654201!2d51.407871!3d35.810303000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc691cb0311fe7936!2sVocational%20Center%208%20Zaferanieh!5e0!3m2!1sen!2sus!4v1662022984542!5m2!1sen!2sus"
            width="600"
            height="450"
            title='map'
            loading="lazy"
          ></iframe >
        </div>
        <div className=' my-4 mx-auto px-5 bgsecondary2 w-75 text-center rounded py-4 call2' id="call">
          <h3 className='fw-bold'> تماس با ما</h3>
          <p className='text-dark fw-bold py-2'>
            شما میتوانید در این قسمت با ما در تماس باشید
          </p>
          <div className='input-group'>
            <input className='form-control form-control-sm mx-1 rounded call3' type="text" placeholder='نام و نام خانوادگی ...' />
            <input className='form-control form-control-sm mx-1 rounded call3' type="emil" placeholder='ایمیل : tehran@gmail.com' />
          </div>
          <div className="my-4 ">
            <label htmlFor="Textarea1" className="form-label"></label>
            <textarea className="form-control call3" id="Textarea1" rows="3" placeholder='پیام های خود را در اینجا بنویسید'>
            </textarea>
          </div>
          <button className='btn btndark px-3 py-2 px-md-5 py-md-3'> ثبت تماس </button>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-end align-items-center p-0 px-4 px-md-0'>
          <div className='col-12 text-end text-md-center text-lg-center my-1 pe-0 col-md-4'>
            <img className='img-fluid rounded-circle bg-dark imgCall p-1 p-md-2 p-lg-3 me-1' src={Call1} alt='کانال های تماس با ما' />
            <small className='me-3 px-0 px-lg-2 me-md-0 me-md-0'>
              شماره تلفن:22185381-(021)
            </small>
          </div>
          <div className='col-12 text-end text-md-center text-lg-center my-1 pe-0 col-md-4'>
            <img className='img-fluid rounded-circle bg-dark imgCall p-1 p-md-2 p-lg-3 me-1' src={Call2} alt='کانال های تماس با ما' />
            <small className='me-3 px-0 px-lg-2 me-md-0'>
              info@cente8.tehrantvto.ir
            </small>
          </div>
          <div className='col-12 text-end text-md-center text-lg-center my-1 pe-0 col-md-4'>
            <img className='img-fluid rounded-circle bg-dark imgCall p-1 p-md-2 p-lg-3 me-1' src={Call3} alt='کانال های تماس با ما' />
            <small className='me-3 px-0 px-lg-2 me-md-0 me-md-0'>
              استان تهران، تهران،بهزادی، میرزایی
            </small>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapAction