import { createContext, useState } from "react";

export const MusicianContext = createContext();

const MusicianContextProvider = ({ children }) => {
  const [musicians, setMusicians] = useState(null);
  const [selectedMusician,setSelectedMusician]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  
  return (
    <MusicianContext.Provider value={{ musicians, 
                                      setMusicians,
                                        selectedMusician,
                                        setSelectedMusician,
                                        loading,
                                        setLoading,
                                        error,setError}}>
      {children}
    </MusicianContext.Provider>
  );
};

export default MusicianContextProvider;
