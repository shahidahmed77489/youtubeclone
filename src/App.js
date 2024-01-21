import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./Pages/Homepage/Homepage";
import PlayingPage from "./Pages/Homepage/PlayingPage";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import SearchMoviesPage from "./Pages/Homepage/SearchMoviesPage";
import { useSelector } from "react-redux";
import SideBarContent from "./Pages/Homepage/SideBarContent";
import { useEffect } from "react";

function App() {
  const { isShow } = useSelector((state) => state.showData);
  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isShow]);
  return (
    <div>
      <BrowserRouter>
        <div className="sticky top-0 z-10 bg-white pb-1">
          {isShow && (
            <div className="bg-[#0000006b] h-[100vh] w-full absolute top-24 md:top-[106px]">
              <div className="absolute bg-white px-4 z-20 top-0 w-3/5 md:w-1/5 h-[600px] overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <SideBarContent />
              </div>
            </div>
          )}
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/videoplaying/:id" element={<PlayingPage />} />
          <Route path="/searchMovie" element={<SearchMoviesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
