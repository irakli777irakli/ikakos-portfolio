import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {



    const [bgColor,setBgColor] = useState(false);
    const [isOpen,setIsOpen] = useState(false);


    useEffect(()=>{
     
      if(localStorage.getItem("bgColorStatus") === "true" || localStorage.getItem("bgColorStatus") === "false"){
       
        setBgColor(JSON.parse(localStorage.getItem("bgColorStatus")))

      }else{
        setBgColor(false)
      }
    },[])


    const changeBgColor = () => {
      setBgColor(!bgColor);
      localStorage.setItem("bgColorStatus",JSON.stringify(!bgColor));

    
    }



  return (
    <AppContext.Provider
      value={{bgColor,setBgColor,isOpen,setIsOpen,changeBgColor}}
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
    
       if(window.pageYOffset > 106){
        setSLide([...slide,slide[0].myStack=true]);
      }
       if(window.pageYOffset > 583 ){
       
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
