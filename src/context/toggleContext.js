import React, { createContext,useContext,useState } from 'react'


const toggleContext = createContext()

export const useToggle = () =>  {
  return useContext(toggleContext)
}
const ToggleProvider = ({ children }) => {

  const [toggle, setToggle] = useState(false);

  function handleToggle(){
    return setToggle(prev => !prev)
  }

  const values = {
    handleToggle,
    toggle
  }

  return (
    <toggleContext.Provider value={values}>
      {children}
    </toggleContext.Provider>
  )
}

export default ToggleProvider
