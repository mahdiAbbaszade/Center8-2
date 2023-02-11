import React from 'react';
import { Link } from 'react-router-dom';
import Arm4 from '../../img/logowhite.svg';

const Footer = () => {
  return (
    <>
      <div className='container-fluid border-0 bgprimary mt-5 py-3 px-4
       px-md-0 flex-md-column d-lg-flex flex-lg-row justify-content-evenly text-md-center text-lg-end text-white'>
        <div className='col px-2'>
          <p className='fw-bold py-2'>
            آمار
          </p>
          <small className=''>
            <small className='d-block py-1'>تعداد بازدیدکنندگان این صفحه: 91</small>
            <small className='d-block py-1'>تعداد بازدیدکنندگان امروز: 12</small>
            <small className='d-block py-1'>تعداد افراد آنلاین: 1</small>
          </small>
        </div>
        <div className=' col px-1 d-md-flex'>
          <div className='col mx-1'>
            <p className='fw-bold border-bottom py-2 py-md-2 pe-3'> لینک های سریع </p>
            <ul className='list-unstyled pe-4'>
              <Link to="/tehranm8tvto" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1 '>صفحه اصلی</li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1'>اخبار و اطلاعیه ها</li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1'>تماس با ما</li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1'>قوانین و مقررات</li>
              </Link>
            </ul>
          </div>
          <div className='col'>
            <p className='fw-bold border-bottom py-2 py-md-2 mx-1 pe-3'> لینک های سریع </p>
            <ul className='list-unstyled pe-4'>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1 '>مناقصه و مزایده</li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1 '> خیرین مهارتی </li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1 '>نظرسنجی از پرتال</li>
              </Link>
              <Link to="#" className='text-decoration-none text-white li-Footer py-1'>
                <li className='mb-1 py-1 '>کارت اعتباری</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='col px-1'>
          <img className='img-fluid img-footer d-block m-auto mx-md-3 pb-2' src={Arm4} alt='سازمان فنی و حرفه ای' />
          <p className='small-footer text-center text-md-end text-lg-justify'>
            <small className=''>
              اداره کل آموزش فنی و حرفه ای استان تهران آموزش های مهارتی را در دو بخش دولتی و غیردولتی با بهره گیری از مربیان مجرب و تجهیزات پیشرفته کارگاهی مطابق با استانداردهای آموزشی روز در خوشه های صنعت، خدمات، کشاورزی و فرهنگ و هنر ارائه می دهد . <br /> این اداره کل با 29 مرکز ثابت دولتی، 229 کارگاه ثابت شهری، 7 کارگاه ویژه معتادین بهبودیافته، 8 کارگاه روستایی، 105 مرکز جوار کارگاهی ، 10 کارگاه جوار دانشگاه، 479 کارگاه جوار پادگان و 66 کارگاه جوار زندان آموزش های فنی و حرفه ای را در بخش دولتی به صورت رایگان ارائه می نماید .<br />همچنین با 1254 آموزشگاه ویژه خواهران و 192 آموزشگاه ویژه برادران و 441 آموزشگاه دو منظوره آموزش های مهارتی را طبق شهریه مصوب هیات نظارت مرکزی سازمان آموزش فنی و حرفه ای کشور به متقاضیان استان ارائه می دهد.
            </small>

          </p>
        </div>
      </div>
    </>
  )
}

export default Footer