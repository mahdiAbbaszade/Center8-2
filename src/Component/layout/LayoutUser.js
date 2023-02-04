import NavbarMenu from '../Header/Navbar'

const LayoutUser = ( { show, setShow, showw, setShoww, children }) => {
  return (
    <div>
        <header>
              <NavbarMenu show={show} setShow={setShow} showw={showw} setShoww={setShoww} />
        </header>
        {children}
    </div>
  )
}

export default LayoutUser