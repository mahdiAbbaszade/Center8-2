import React,{useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const TamdidTable = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

  return (
    <div>
          <div className="col d-flex justify-content-center">
              <div className="col-12 col-md-12 col-lg-11 bg-light p-1 mx-0 my-2 p-md-2 p-lg-1">
                  <div className="col-12 col-md-12 col-lg-12 px-1 px-md-2 px-lg-0 d-flex justify-content-center">
                      <div className="form-establish px-0 px-md-1 px-lg-0 py-3 col-lg-12 col-md-12 col-12 rounded border border-1 border-dark">
                          <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon1" className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام :
                                  <Form.Control placeholder="نام" aria-describedby="basic-addon1" className="establish-Form-Control"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon2" className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام خانوادگی :
                                  <Form.Control placeholder="نام خانوادگی" aria-describedby="basic-addon2"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon3" className="col-6 col-md-6 col-lg-3 rounded-0 input2">نام پدر :
                                  <Form.Control placeholder="نام پدر" aria-describedby="basic-addon3"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon4" className="col-6 col-md-6 col-lg-3 rounded-0 input2">شماره شناسنامه :
                                  <Form.Control placeholder="شماره شناسنامه" className="rounded" aria-describedby="basic-addon4"
                                  />
                              </InputGroup.Text>
                          </div>
                          <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon5" className="col-6 col-md-6 col-lg-6 rounded-0 input2" >کدملی :
                                  <Form.Control placeholder="کدملی" aria-describedby="basic-addon5"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon6" className="col-6 col-md-6 col-lg-6 rounded-0 input2">تاریخ دقیق تولد :
                                  <Form.Control placeholder="تاریخ دقیق تولد" className="rounded" aria-describedby="basic-addon6" type="date"
                                  />
                              </InputGroup.Text>
                          </div>
                          <InputGroup className="px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon7" className="col-3 col-md-3 col-lg-3 p-1 rounded-0 input2">تابعیت :
                                  <Form.Control placeholder="تابعیت" className="rounded" />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon8" className="col-6 col-md-5 col-lg-5 p-1 rounded-0 input2">محل تولد طبق شناسنامه :
                                  <Form.Control placeholder="محل تولد طبق شناسنامه" className="rounded" />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon9" className="col-3 col-md-4 col-lg-4 p-1 rounded-0 input2"> وضعیت تاهل :
                                  <Form.Control placeholder="وضعیت تاهل " className="rounded" />
                              </InputGroup.Text>
                          </InputGroup>
                          <InputGroup className="px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon10" className="col-12 col-md-12 col-lg-8 p-1 rounded-0 input2">وضعیت تحصیلی :
                                  <InputGroup.Text className="col d-flex justify-content-around align-items-center bg-white">
                                      <Form.Check className="rounded-0 input2 mx-0" inline label="دانش آموز" name="group1" type="radio"
                                      />
                                      <Form.Check className="rounded-0 input2 mx-0" inline label="دانشجو" name="group1" type="radio"
                                      />
                                      <Form.Check className="rounded-0 input2 mx-0" inline label="فارغ التحصیل" name="group1" type="radio"
                                      />
                                      <Form.Check className="rounded-0 input2 mx-0" inline label="عدم اشتغال به تحصیل" name="group1" type="radio"
                                      />
                                  </InputGroup.Text>
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon11" className="col-12 col-md-12 col-lg-4 p-1 rounded-0 input2"> آخرین مقطع تحصیلی :
                                  <Form.Control placeholder="آخرین مقطع تحصیلی " className="rounded" />
                              </InputGroup.Text>
                          </InputGroup>
                          <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon12" className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2"> وضعیت نظام وظیفه :
                                  <Form.Control placeholder="وضعیت نظام وظیفه" aria-describedby="basic-addon12" className="rounded "
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon13" className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">وضعیت اشتغال :
                                  <Form.Control placeholder="وضعیت اشتغال" aria-describedby="basic-addon13"
                                      className=" rounded"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon14" className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">نوع شغل :
                                  <Form.Control placeholder="نوع شغل" aria-describedby="basic-addon14"
                                      className=" rounded"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon15" className="col-lg-3 col-md-6 col-6 p-1 rounded-0 input2">وضعیت جسمانی :
                                  <Form.Control placeholder="وضعیت جسمانی" aria-describedby="basic-addon15"
                                      className=" rounded"
                                  />
                              </InputGroup.Text>
                          </div>
                          <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                              <div className="input-group">
                                  <div className="col-12 col-md-4">
                                      <InputGroup.Text id="basic-addon16" className="rounded-0 input2">کد پستی 10 رقمی محل سکونت  :
                                      </InputGroup.Text>
                                      <Form.Control placeholder="کد پستی 10 رقمی محل سکونت " className="rounded-0" aria-describedby="basic-addon16"
                                      />
                                  </div>
                                  <div className="d-flex col col-md-4">
                                      <div className="col m-0 p-0">
                                          <InputGroup.Text id="basic-addon16" className="rounded-0 input2">شماره تلفن ثابت  :</InputGroup.Text>
                                          <Form.Control placeholder=" شماره تلفن ثابت" className="rounded-0" aria-describedby="basic-addon16"
                                          />
                                      </div>
                                      <div className="col m-0 p-0">
                                          <InputGroup.Text id="basic-addon16" className="rounded-0 input2">پیش شماره :</InputGroup.Text>
                                          <Form.Control placeholder=" پیش شماره " className="rounded-0" aria-describedby="basic-addon16"
                                          />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <InputGroup.Text id="basic-addon18" className="rounded-0 input2">شماره تلفن همراه :</InputGroup.Text>
                                      <Form.Control placeholder="شماره تلفن همراه " className="rounded-0" aria-describedby="basic-addon18"
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="input-group col px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon19" className="col px-1 rounded-0 input2">آدرس محل سکونت :
                                  <Form.Control className="rounded input2" placeholder="آدرس محل سکونت " aria-describedby="basic-addon19"
                                  />
                              </InputGroup.Text>
                          </div>
                          <div>
                              <InputGroup className="d-flex justify-content-between px-0 px-md-1 px-lg-1 my-1 input-group">
                                  <InputGroup.Text id="basic-addon20" className="col-12 col-md-12 col-lg-6 px-1
                                     rounded-0 input2 input-group-text">نوع مدرک قبلی  :
                                      <InputGroup.Text className="bg-white px-0 col col-md col-lg d-flex justify-content-around input-group-text input-group-text">
                                          <Form.Check className="rounded-0 input2 mx-0" inline label="آموزشی " name="group1" type="radio"
                                          />
                                          <Form.Check className="rounded-0 input2 mx-0" inline label="ادواری" name="group1" type="radio"
                                          />
                                          <Form.Check className="rounded-0 input2 mx-0" inline label="کار و دانش " name="group1" type="radio"
                                          />
                                          <Form.Check className="rounded-0 input2 mx-0" inline label=" تفاهم نامه " name="group1" type="radio"
                                          />
                                      </InputGroup.Text>
                                  </InputGroup.Text>

                                  <InputGroup.Text id="basic-addon10" className="col-12 col-md-12 col-lg-6 px-1 rounded-0 input2  input-group-text">متقاضی اخد دیپلم رشته کارودانش  :
                                      <InputGroup.Text className="bg-white rounded col col-md col-lg d-flex justify-content-around input-group-text">
                                          <Form.Check className="rounded-0 input2 mx-0" inline label="می باشم " name="group1" type="radio"
                                          />
                                          <Form.Check className="rounded-0 input2 mx-0" inline label="نمی باشم" name="group1" type="radio"
                                          />
                                      </InputGroup.Text>
                                  </InputGroup.Text>
                              </InputGroup>
                          </div>
                          <div className="input-group px-0 col-12 px-md-0 px-lg-1 my-1">
                              <InputGroup className="px-0 px-md-0 px-lg-0 my-1">
                                  <InputGroup.Text id="basic-addon21" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">نام حرفه  :
                                      <Form.Control placeholder=" نام حرفه " className="rounded- input2" aria-describedby="basic-addon21"
                                      />
                                  </InputGroup.Text>
                                  <InputGroup.Text id="basic-addon22" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">شماره استاندارد  :
                                      <Form.Control placeholder="شماره استاندارد " className="rounded- input2" aria-describedby="basic-addon22"
                                      />
                                  </InputGroup.Text>
                                  <InputGroup.Text id="basic-addon23" className="col-4 col-md-4 col-lg-4 p-1 rounded-0 input2">تاریخ آزمون  :
                                      <Form.Control placeholder=" تاریخ آزمون" className="rounded- input2" aria-describedby="basic-addon23"
                                      />
                                  </InputGroup.Text>
                              </InputGroup>
                          </div>
                          <div className="input-group px-0 px-md-1 px-lg-1 my-1">
                              <InputGroup.Text id="basic-addon24" className="col-6 col-md-6 col-lg-4 p-1 rounded-0 input2">شماره گواهینامه  :
                                  <Form.Control placeholder=" شماره گواهینامه  " aria-describedby="basic-addon24" className="establish-Form-Control"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon25" className="col-6 col-md-6 col-lg-4 p-1 rounded-0 input2">تاریخ صدور گواهینامه  :
                                  <Form.Control placeholder="تاریخ صدور گواهینامه " aria-describedby="basic-addon25"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon26" className="col-6 col-md-6 col-lg-2 p-1 rounded-0 input2">نمره کتبی :
                                  <Form.Control placeholder=" نمره کتبی " className="rounded input2" aria-describedby="basic-addon26"
                                  />
                              </InputGroup.Text>
                              <InputGroup.Text id="basic-addon26" className="col-6 col-md-6 col-lg-2 p-1 rounded-0 input2">نمره عملی :
                                  <Form.Control placeholder=" نمره عملی " className="rounded input2" aria-describedby="basic-addon26"
                                  />
                              </InputGroup.Text>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TamdidTable