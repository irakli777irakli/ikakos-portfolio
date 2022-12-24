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





export function useScrollHeight(){
   
    const [slide,setSLide] = useState([
      {ikakosPicture:false},
      {myStack:false},
      {projects:false},
    ]);
  useEffect(()=>{
    const handleResize = () => {
    
       if(window.pageYOffset > 106 && window.pageYOffset < 206){
        setSLide([...slide,slide[0].myStack=true]);
      }
       if(window.pageYOffset > 583 && window.pageYOffset < 683){
       
        setSLide([...slide,slide[0].projects=true]);
       
      }
      
     
    };
    setSLide([...slide,slide[0].ikakosPicture=true]);

    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    }
  },[])
  return slide;
}
