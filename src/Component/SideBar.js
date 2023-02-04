import { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import { menuContext } from '../contexts/MenuContext';
import { Link } from 'react-router-dom';
import Arm2 from '../img/armSazman.png'
import { modalStateContext } from '../../src/contexts/ModalStateContext';


const SideBar = () => {
  const { modalState, setModalState } = useContext( modalStateContext )
  const { openMenu, setOpenMenu } = useContext( menuContext )
  return (
    <Drawer
      anchor="right"
      className=''
      open={openMenu}
      onClose={() => setOpenMenu( !openMenu )}
    >
      <div className=' menu-right overflow-hidden'>
        <p className='m-2 text-center border-bottom'><img className='img-menu' src={Arm2} alt='سازمان فنی حرفه ای' /></p>
        <div className='ps-3 me-2 ms-3 w-100'>
          <ul className='p-1 m-1 w-100'>
            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm '><Link className='text-decoration-none text-dark' to="/">صفحه اصلی</Link></li>
            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm '><Link className='text-decoration-none text-dark' to="#">اخبار و اطلاعیه</Link></li>
            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm '><Link className='text-decoration-none text-dark' to="#">تماس با ما</Link></li>
            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm '><Link className='text-decoration-none text-dark' to="#">درباره ما </Link></li>

            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm border-top'><button className='text-decoration-none border-none btn text-dark' onClick={() => {
              setOpenMenu( false )
              setModalState( { ...modalState, modalLogin:true } )
            }}>ورود</button></li>

            <li className='mx-3 px-5 py-3 list-unstyled list-menu-sm '><button className='text-decoration-none border-none btn text-dark' onClick={() => {
              setOpenMenu(false)
              setModalState( { ...modalState, modalSignup: true } )
            }}>ثبت نام</button></li>
            
          </ul>
        </div>
      </div>
    </Drawer>
  )
}

export default SideBar