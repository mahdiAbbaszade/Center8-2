import React from "react";
import Arm3 from '../../img/logoo.gif'

const ServiceDesk = () => {
    return (
        <>
            <div className="container-fluid pb-5 mt-5 pt-3">
                <div className="flex-column d-md-flex flex-md-row align-content-center justify-content-center justify-content-md-evenly align-items-center my-1">
                    <div className="col-12 px-5 px-md-1 mb-3 col-md-5">
                        <div className=" text-center rounded">
                            <img className="img-fluid deskwork" src={Arm3} alt="سازمان فنی حرفه ای" />
                        </div>
                    </div>
                    <div className="col-12 px-5 px-md-1 mb-3 col-md-5" id="us">
                        <p className="fw-bold fs-3"> درباره ما </p>
                        <p className="text-p fw-normal">
                            مرکز آموزش فنی حرفه ای شماره هشت زعفرانیه ، آموزش های مهارتی را در دو بخش دولتی و غیردولتی با بهره گیری از مربیان مجرب و تجهیزات پیشرفته کارگاهی ، مطابق با استانداردهای آموزشی در خوشه های صنعت، خدمات ، کشاورزی و فرهنگ و هنر ارائه می دهد این مرکز پتانسیل آموزشی، کارگاه ثابت شهری ، کارگاه جوار دانشگاهی، کارگاه جوار پادگان، کارگاه جوار زندان، کارگاه مهارت آموزی در محیط واقعی کار، کارگاه های مهارت آموزی با گروه هدف بهزیستی، کارگاه های مهارت آموزی با گروه هدف کمیته امداد و آموزشگاه های آزاد مهارت های فنی و حرفه ای را در بخش دولتی و خصوصی ارائه می نماید .شایان ذکر است تعداد آموزشگاه آزاد ویژه خواهران و برادران در مرکز زعفرانیه به 1510 عدد می رسد که طبق شهریه مصوب هیات نظارت مرکزی سازمان آموزش فنی و حرفه ای کشور به متقاضیان ارائه خدمت می دهند .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceDesk;