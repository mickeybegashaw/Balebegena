import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/LogInn.jsx";
import Register from "./Pages/Register.jsx";
import SearchResults from "./Pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectedMusicians from "./Pages/selectedMusicians.jsx";
import MusicianPostingFom from "./Pages/MusicianPostingFom.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MusicianContext } from "./context/musiciansContext.jsx";
import NotFound from "./Pages/notFound.jsx";
import { AuthContext } from "./context/userContext.jsx";

const App = () => {
  const { selectedMusician, musicians } = useContext(MusicianContext);
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-results"
          element={musicians ? <SearchResults /> : <Navigate to={"/"} />}
        />
        <Route
          path="/selected-musician"
          element={
            selectedMusician ? <SelectedMusicians /> : <Navigate to={"/"} />
          }
        />
        <Route path="/user/login" element={user? <Navigate to={'/'}/> : <Login />} />
        <Route path="/user/register" element={user? <Navigate to={"/musician-post"}/> : <Register />} />
        <Route path="/musician-post" element={user?<MusicianPostingFom />: <Navigate to={'/user/login'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
