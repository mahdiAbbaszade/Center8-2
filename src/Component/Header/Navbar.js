import { useContext } from 'react';
import { menuContext } from '../../contexts/MenuContext';
import { modalStateContext } from '../../contexts/ModalStateContext';
import Arm from '../../img/logoo.gif';
import React from 'react';
import Scrollspy from 'react-scrollspy'
import { Link } from 'react-router-dom';

function NavbarMenu() {
    const { openMenu, setOpenMenu } = useContext( menuContext )
    const { modalState, setModalState } = useContext( modalStateContext )

    return (
        <>
            <button className='d-none d-md-none d-lg-none d-xl-none p-3 btn btn-light buttomMenu' onClick={() => setOpenMenu( !openMenu )}></button>
            <div className=' d-none d-sm-none d-md-none d-lg-flex justify-content-evenly align-items-center pe-4 p-0 pe-md-1 haeder123'>
                <span className='me-auto ps-3 ps-lg-1 px-md-0 me-lg-0 ms-lg-3 me-md-0 span123'>
                    <img src={Arm} className='img-saz me-0 py-1 me-md-0 me-lg-2 pe-lg-4' alt='سازمان فنی حرفه ای' />
                </span>
                <div className='d-flex align-items-center me-0 me-lg-3 pe-1 pe-md-1 pe-lg-3 ms-lg-4 ps-lg-3'>
                    <Scrollspy items={['main', 'akhbar', 'call', 'us']} currentClassName="is-current" className='p-0 m-0 mx-md-1 mx-lg-3 mx-xl-4'>
                        <ul className="d-flex flex-row d-none d-md-inline-flex text-dark align-items-center navbar-nav p-0 me-0 mx-md-1 me-md-1 my-4 mx-lg-2 ms-lg-3 ps-lg-4 ps-md-3 mb-0 is-current">
                            <li className=" mx-1 mx-md-2 mx-lg-2 px-lg-2 mx-xl-3 listmenu">
                                <Link className="text-secondary text-decoration-none " to="/" >صفحه اصلی</Link>
                            </li>
                            <li className=" mx-1 mx-md-2 mx-lg-2 px-lg-2 mx-xl-3 listmenu">
                                <a className="text-secondary text-decoration-none " href='#akhbar'>اخبار و اطلاعیه ها</a>
                            </li>
                            <li className=" mx-1 mx-md-2 mx-lg-2 px-lg-2 mx-xl-3 listmenu">
                                <a className="text-secondary text-decoration-none " href="#call">تماس</a>
                            </li>
                            <li className=" mx-1 mx-md-2 mx-lg-2 px-lg-2 mx-xl-3 listmenu">
                                <a className="text-secondary text-decoration-none " href="#us">درباره ما</a>
                            </li>
                        </ul>
                    </Scrollspy>
                    <div className="ps-5 ps-md-1 pe-lg-2 pe-md-2 ps-lg-1 me-md-0 me-lg-3 d-lg-block d-md-block d-sm-none d-none">
                        <button onClick={() => setModalState( { ...modalState, modalLogin: true } )} className="btn btn-white border rounded-3 mx-2 px-4 px-md-3 px-lg-4 px-xl-4 py-2">ورود</button>

                        <button onClick={() => setModalState( { ...modalState, modalSignup: true } )} className="btn btn-primary bgprimary border rounded-3 mx-2 px-4 mx-1 px-md-3 px-lg-4 px-xl-4 py-2">ثبت نام</button>
                    </div>
                </div>
            </div>
        </>

    );
}



export default NavbarMenu;