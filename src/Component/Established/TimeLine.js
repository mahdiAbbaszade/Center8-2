
// import React, { useState } from "react";

// import HorizontalTimeline from "react-horizontal-timeline";

// function TimeLine() {
//     const [value, setValue] = useState( 0 );
//     // const [previous, setPrevious] = useState( 0 );

//     // Values should be only date
//     const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

//     // Description array corresponding to values
//     const description = [
//         "The event of 1 Jan 2021 : Happy New Year",
//         "The event of 15 Jan 2021 : Festival",
//         "The event of 22 March 2021 : Board Exam",
//     ];

//     return (
//         <div className="root-div">
//             <div style={{
//                 width: "60%",
//                 height: "100px",
//                 margin: "0 auto"
//             }}>
//                 <HorizontalTimeline
//                     styles={{ outline: "#DFA867", foreground: "#19295C" }}
//                     index={value}
//                     indexClick={( index ) => {
//                         setValue( index );
//                         setPrevious( value );
//                     }}
//                     values={VALUES}
//                 />
//             </div>
//             <div className="text-center">{description[value]}</div>
//         </div>
//     );
// }

// export default TimeLine;



const TimeLine = () => {
    return ( 
        <>
            <div className="container bg-info">
                <div className="text-center py-4 px-2 d-flex justify-content-around justify-content-lg-evenly">
                    {/* <Timeline/> */}
                    <span className="px-1 px-md-2 px-lg-3 py-2 mx-2 mx-md-2 border btn btn-light rounded-3">ثبت نام اولیه </span>
                    <span className="px-1 px-md-2 px-lg-3 py-2 mx-2 mx-md-2 border btn btn-light rounded-3">آپلود</span>
                    <span className="px-1 px-md-2 px-lg-3 py-2 mx-2 mx-md-2 border btn btn-light rounded-3">انتخاب استاندارد</span>
                    <span className="px-1 px-md-2 px-lg-3 py-2 mx-2 mx-md-2 border btn btn-light rounded-3"> تایید نهایی و پرداخت</span>
                </div>
            </div>
        </>
     );
}
 
export default TimeLine;