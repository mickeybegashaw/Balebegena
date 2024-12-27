import { createContext, useState } from "react";

export const MusicianContext = createContext();

const MusicianContextProvider = ({ children }) => {
  const [musicians, setMusicians] = useState(null);
  const [selectedMusician, setSelectedMusician] = useState(null);

  return (
    <MusicianContext.Provider
      value={{ musicians, setMusicians, selectedMusician, setSelectedMusician }}
    >
      {children}
    </MusicianContext.Provider>
  );
};

export default MusicianContextProvider;
