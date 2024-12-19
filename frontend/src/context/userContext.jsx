import { createContext , useState } from "react";

export const AuthContext = createContext() 

const UserContextProvider = ({children}) => {
  const [ user , setUser ] =useState(null)
  const [ error , setError ] =useState(null)
  const [ loading , setLoading ] =useState(false)

  return (
    <AuthContext.Provider value={{user , setUser ,error , setError,loading , setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export default UserContextProvider
