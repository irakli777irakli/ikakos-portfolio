import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [bgColor,setBgColor] = useState(true);
    const [isOpen,setIsOpen] = useState(false)


  return (
    <AppContext.Provider
      value={{bgColor,setBgColor,isOpen,setIsOpen}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }