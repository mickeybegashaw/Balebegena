import { createContext, useState } from "react";

export const MusicianContext = createContext();

const MusicianContextProvider = ({ children }) => {
  const [musicians, setMusicians] = useState([]);
  
  return (
    <MusicianContext.Provider value={{ musicians, setMusicians }}>
      {children}
    </MusicianContext.Provider>
  );
};

export default MusicianContextProvider;
