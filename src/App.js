import React from "react";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/Header/MoreInfo/News/News";
import About from "./components/Header/MoreInfo/About/About";
import Sell from "./components/Header/MoreInfo/Selling/Sell";
import Help from "./components/Header/MoreInfo/Help/Help";
import SignUP from "./components/Header/Log/LogIn_SignUp/Signup";
import LogIn from "./components/Header/Log/LogIn_SignUp/LogIn";
// import MainHeader from "./components/Header/MainHeader";
// import SearchBar from "./components/Header/Search/SearchBar";
// import MainOption from "./components/Header/SubHead/DropMenu/Page";
// import { Navbar } from "./components/Header/SubHead/DropMenu/NavBar";
// import { SliderData } from './data/sliderData'
// import ImageSlider from "./components/ImageSlider"; 

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignUp" element={<SignUP />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>

          {/* <MainHeader /> */}
          <Routes>
            <Route path="/News" element={<News />} />
            <Route path="/About" element={<About />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Help" element={<Help />} />
          </Routes>

          <Routes>
            <Route path="/News_Arrived" />
            <Route path="/Brands" />
            <Route path="/Men" />
            <Route path="/Women" />
            <Route path="/Kids" />
            <Route path="/Accessories" />
            <Route path="/Sneaker" />
            <Route path="/More_Categories" />
          </Routes>
        </Router>


         {/* <ImageSlider images={SliderData} /> */}
      </div>
    </div>
  );
}

export default App;
