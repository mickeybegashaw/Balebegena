import { createContext , useState, useEffect } from "react";

export const AuthContext = createContext() 

const UserContextProvider = ({children}) => {
  const [ user , setUser ] =useState(null)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  },[])

  return (
    <AuthContext.Provider value={{user , setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
export default UserContextProvider
