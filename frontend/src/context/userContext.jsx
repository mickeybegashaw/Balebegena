import { createContext , useState, useEffect } from "react";

export const AuthContext = createContext() 

const UserContextProvider = ({children}) => {
  const [ user , setUser ] =useState(null)
  const [ registerError , setRegisterError ] =useState(null)
  const [ logInError , setLogInError ] =useState(null)
  const [ loading , setLoading ] =useState(false)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  },[])

  return (
    <AuthContext.Provider value={{user , setUser ,registerError , setRegisterError,logInError,setLogInError,loading , setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export default UserContextProvider
