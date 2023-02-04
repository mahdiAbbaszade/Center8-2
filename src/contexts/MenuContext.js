import {createContext,useState} from 'react'

export const menuContext = createContext()

const MenuContext = ({children}) => {
    const [openMenu,setOpenMenu] = useState(false)
  return (
      <menuContext.Provider
       value={{ openMenu, setOpenMenu }}>
        {children}
      </menuContext.Provider>
  )
}

export default MenuContext