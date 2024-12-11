import Header from "./components/Header";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectedMusicians from "./Pages/selectedMusicians.jsx";
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/selected-musician" element={<SelectedMusicians/>}/>
        <Route
          path="*"
          element={
            <h1 className="text-center font-bold text-3xl md:text-4xl mt-10">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
