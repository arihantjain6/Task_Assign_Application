import React, {createContext} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useState, useEffect } from 'react'

export const AuthContext = createContext()
// localStorage.clear()

const AuthProvider = ({children}) => { 
    
    const [userData, setUserData] = useState(null)

   useEffect(() => {
    if (!localStorage.getItem('employees')) {
      setLocalStorage();
    }
    const { employees } = getLocalStorage();
    setUserData({ employees });
   }, [])
   

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
