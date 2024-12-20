import { createContext , useState, useEffect } from "react";

export const AuthContext = createContext() 

const UserContextProvider = ({children}) => {
  const [ user , setUser ] =useState(null)
  const [ error , setError ] =useState(null)
  const [ loading , setLoading ] =useState(false)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  },[])

  return (
    <AuthContext.Provider value={{user , setUser ,error , setError,loading , setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export default UserContextProvider
