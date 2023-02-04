import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import LayoutUser from '../layout/LayoutUser'
import khabar4 from '../../img/14010602000729_Test_PhotoO.jpg';
import { useEffect } from 'react';

const KHabar3 = () => {
  
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )
  return (
    <LayoutUser >
      <div className='container-fiuld KhabarU'>
        <div className=' d-flex justify-content-between py-4 px-4 bg-info'>
          <span className='text-white fw-bold mx-5' style={{ fontSize: '20px' }}>مشاهده خبر</span>
          <Link className='mx-5 text-decoration-none' to="/">
            <span className='text-white'>صفحه اصلی</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ weight: '30px', height: '30px' }}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Link>
        </div>
        <div className='d-flex'>
          <div className='col-9 justify-content-center pb-4'>
            <div className=''>
              <p style={{ fontSize: '18px' }} className='p-5 mb-5 fw-bold bg-light border-start'>* تدوین 1234 استاندارد آموزشی دانش بنیان / حق انحصاری استانداردهای نوین آموزشی و مهارتی
</p>
              <div className='d-flex justify-content-center'>
                <img style={{ width: '450px', height: '350px' }} className='' src={khabar4} alt="خبر" />
              </div>
              <div className='my-4 py-3 px-3' style={{ textAlign: 'justify', lineHeight: '30px' }}>
                <div className='border-bottom my-3 py-3'>
                  <span className='mx-4'>تاریخ : 1401/05/29 </span>
                </div>
                <p className='py-2 mx-3'>
                  ماه مهر ، آغاز فصل رویش دانایی و سفر در مسیر دانستن و فهمیدن است.  شروع سال تحصیلی جدید، اغاز حرکتی پرشور در مسیر فعالیتهای آموزشی و پژوهشی، است و دانشگاه‌ جایگاه تعلیم و تربیت انسان‌های متعهد و متخصص، پویا و مسئولیت پذیر است .
                  تقارن خجسته طلوع علم و شکوفایی دانش با هفته دفاع مقدس و ایام اربعین حسینی، می تواند فرصتی برای توجه به اهمیت و فضیلت جهد و تلاش علمی در راستای سرافرازی کشور عزیزمان ایران اسلامی باشد و درسی پندآموز که می‌توان با پیوند علم و ایمان، قله‌های رفیع پیروزی و کامیابی را فتح کرد.
                  امید است در سالی که مزین به شعار تولید،پشتیبانی ها و مانع زدایی ها است،  با همت و تلاش شما عزیزان و با رهبری اساتید گرانقدر و پشتیبانی همکاران متعهد ، استوارتر و با نشاط‌تر از قبل در مسیر رونق و شکوفایی تولید علم و دانش با شتاب بیشتری حرکت کرده و در پرتو لطف الهی و با عنایت امام زمان(عج) و رهنمودهای مقام معظم رهبری (مدظله العالی)، بتوانیم گامهای مهم و موثری در جهت رشد و بالندگی و تحقق اهداف متعالی و سازنده ایران اسلامی با صلابت و ثابت قدم گام برداریم.

                  اینجانب ضمن عرض خیر مقدم به دانشجویان ورودی جدید، فرا رسیدن سال تحصیلی جدید و آغاز دلنشین بهار علم و دانش را به جامعه دانشگاهی بویژه اساتید، کارمندان و دانشجویان عزیز این دانشکده، صمیمانه تبریک عرض می نمایم و از درگاه خداوند متعال برای تمام تلاشگران دلسوز دانشکده، آرزوی موفقیت و برای دانشجویان عزیز، سربلندی و دستیابی به اهداف و آرمانهای ارزشی توأم با بهروزی و سعادت را خواهانم.
                </p>
              </div>
            </div>
          </div>
          <div className='col-3 bg-light px-3'>
            <div className='py-3 my-2 mx-1'>
              <p className=' fw-bold'>آخرین خبرـــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</p>
            </div>
            <div className='border-bottom py-2'>
              <p>
                الزام رعایت بندهای فهرست مصادیق محتوای مجرمانه در فضای مجازی
              </p>
              <small>1401/07/20</small>
            </div>
            <div>
              <div className='border-bottom py-2'>
                <p>
                  هماهنگی لازم اتاق انصاف با دانشکده فنی حرفه ای
                </p>
                <small>1401/07/23</small>
              </div>
              <div className='border-bottom py-2'>
                <p>
                  برگزاری نخستین نمایشگاه خدمات کسب‌وکار ایران                          </p>
                <small>1401/06/30</small>
              </div>
              <div className='border-bottom py-2'>
                <p>
                  فراخوان ثبت نام در نمایشگاه GITEX دوبی | اعزام ۱۰ استارت‌آپ منتخب                            </p>
                <small>1401/06/19</small>
              </div>
              <div className='border-bottom py-2'>
                <p>
                  الزام رعایت بندهای فهرست مصادیق محتوای مجرمانه در فضای مجازی
                </p>
                <small>1401/05/02</small>
              </div>
              <div className='border-bottom py-2'>
                <p>
                  برگزاری نخستین نمایشگاه خدمات کسب‌وکار ایران                            </p>
                <small>1401/06/01</small>
              </div>
            </div>
          </div>
        </div>
        <Footer className="mt-0" />
      </div>
    </LayoutUser >
  )
}

export default KHabar3;