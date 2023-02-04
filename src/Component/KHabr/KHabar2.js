import React,{useEffect} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import LayoutUser from '../layout/LayoutUser'
import khabar3 from '../../img/8569056905-1.jpg';


const KHabar2 = () => {
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
              <p style={{ fontSize: '18px' }} className='p-5 mb-5 fw-bold bg-light border-start'>* آیین تفاهم‌نامه همکاری اتاق اصناف ایران و سازمان آموزش فنی‌وحرفه‌ای کشور </p>
              <div className='d-flex justify-content-center'>
                <img style={{ width: '450px', height: '350px' }} className='' src={khabar3} alt="خبر" />
              </div>
              <div className='my-4 py-3 px-3' style={{ textAlign: 'justify', lineHeight: '30px' }}>
                <div className='border-bottom my-3 py-3'>
                  <span className='mx-4'>تاریخ : 1401/05/31 </span>
                </div>
                <p className='py-2 mx-3'>
                  * اعطای مجوز به اتحادیه‌ها و اتاق‌های اصناف برای راه‌اندازی مراکز مهارت آموزی جوار کارگاهی

                  معاون وزیر تعاون، کار و رفاه اجتماعی با تأکید بر  مهارت‌های نرم و بیان داشت: لازم است در بنگاه‌های تولیدی و خدماتی، مهارت‌های ارتباط با مشتری را در خود تقویت کنند.

                  حسینی‌نیا تصرح کرد: این تفاهم‌نامه بسیار اثرگذار خواهد بود. برای نوشتن مفاد این تفاهم‌نامه آسیب‌شناسی دوران گذشته را هم داشته‌ایم و چالش‌های تامین اجتماعی را نیز در نظر گرفته و رفع کرده‌ایم تا افرادی که برای آموزش به کارگاه‌ها معرفی می‌شوند در نظام و چارچوب مشخصی مشغول به فعالیت شوند. واحدهای صنفی پذیرنده کارآموزان QR_Code دریافت می‌کند تا مشخصات کارآموز برای بازرسان تامین اجتماعی به عنوان کارگر مشمول آن واحد صنفی تلقی نشود.

                  رئیس سازمان آموزش فنی‌و‌حرفه‌ای کشور همچنین خبر داد: آمادگی لازم برای اعطای مجوز به اتحادیه‌ها و اتاق‌های اصناف برای راه‌اندازی آموزشگاه‌های آزاد وجود دارد. این کار موجب می‌شود که شبکه آموزشگاه‌های مهارتی در کشور تقویت شود.

                  رئیس اتاق اصناف در ادامه این نشست گفت: با امضای این تفاهم نامه، همکاری در زمینه اجرایی کردن طرح‌هایی از جمله استفاده از ظرفیت‌های مشترک به منظور اجرای هرچه بهتر دستورالعمل “مهارت‌آموزی در محیط کار واقعی”، “آیین نامه اجرایی مشاغل تخصصی و فنی مربوط به موضوع ماده ۱۳ قانون نظام صنفی کشور”، آموزش‌های دوگانه نظری و عملی در جهت توانمندسازی کارآفرینان صنفی و شاغلان در کسب و کارها و واحدهای صنفی، تقویت استانداردهای شغلی و مهارتی و … تسهیل خواهد شد.

                  ممبینی بیان کرد: همکاری‌های اتاق اصناف ایران و سازمان آموزش فنی‌و‌حرفه‌ای کشور در سال‌های اخیر روز به روز گسترده‌تر شده است و لازم است برای افزایش این همکاری‌ها تفاهم‌نامه جدیدی امضا شود.

                  وی افزود: اتاق اصناف ایران از ظرفیت سازمان یافته بیش از ۳ میلیون واحد صنفی، قریب به ۸ هزار اتحادیه و ۴۰۰ اتاق اصناف برخوردار است و در سراسر کشور با تنوع سن، جنسیت و مهارت پراکنده‌اند. هر کدام از این افراد حقیقی و حقوقی دارای ظرفیت‌های متعدد بوده و البته در مقابل نیازمند بازآموزی‌هایی نیز هستند.
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

export default KHabar2;