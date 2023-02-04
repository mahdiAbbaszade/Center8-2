import React,{useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import LayoutAdmin from '../layout/LayoutAdmin'
import Tabveiws2 from './TabVeiws2'



const DarkhasteGovahi = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

  return (
    <LayoutAdmin>
        <div className=''>
              {/* <Tabveiws2 /> */}
              <div className='mx-5 my-5 d-flex justify-content-center'>
                  <p className='text-primary bg-secondary bg-opacity-10 p-2 px-3 w-100 text-center'>
                    شما از این قسمت می توانید درخواست خود را جهت معرفی به ادارات ثبت نمایید
                  </p>
              </div>
              {/* form */}
              <div className=' justify-content-center mx-3 bg-white p-3'>
                  <div className="input-group px-0 px-md-2 px-lg-2 my-2">
                      <InputGroup.Text id="basic-addon1" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent">اینجانب
                          <Form.Control placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1 " className="establish-Form-Control"
                          />
                      </InputGroup.Text>
                      <InputGroup.Text id="basic-addon2" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent">با نام آموزشگاه
                          <Form.Control placeholder="نام آموزشگاه" aria-describedby="basic-addon2"
                          />
                      </InputGroup.Text>
                      <InputGroup.Text id="basic-addon3" className="col-12 col-md-4 col-lg-4 rounded-0 input2 border-0 bg-transparent"> کد ملی  
                          <Form.Control placeholder="کدملی" aria-describedby="basic-addon3"
                          />
                      </InputGroup.Text>
                      <textarea className="form-control my-3 rounded-0" id="Textarea1" rows="5" placeholder='متن درخواست اینجا ثبت شود  '>
                      </textarea>
                  </div>
                  <div className='d-grid col-2 me-auto'>
                      <button className='btn btn-primary bgprimary border-0 my-2 rounded-0 '> ثبت درخواست </button>

                  </div>
              </div>
        </div>
    </LayoutAdmin>
  )
}

export default DarkhasteGovahi