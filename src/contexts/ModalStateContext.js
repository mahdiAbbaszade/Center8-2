import { createContext, useState } from 'react'

export const modalStateContext = createContext()

const ModalStateContext = ( { children } ) => {
    const [modalState, setModalState] = useState({
        modalLogin:false,
        modalSignup:false
    })
    return (
        <modalStateContext.Provider
            value={{ modalState, setModalState }}>
            {children}
        </modalStateContext.Provider>
    )
}



export default ModalStateContext