import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import News from "./components/Header/MoreInfo/News/News";
import About from "./components/Header/MoreInfo/About/About";
import Sell from "./components/Header/MoreInfo/Selling/Sell";
import Help from "./components/Header/MoreInfo/Help/Help";
import SignUP from "./components/Header/Log/LogIn_SignUp/Signup";
import LogIn from "./components/Header/Log/LogIn_SignUp/LogIn";
import Nike from "./components/ShopBrand/Nike/Nike";
import Adidas from "./components/ShopBrand/Adidas/Adidas";
import NewBalance from "./components/ShopBrand/New_Balance/NewBalance";
import Puma from "./components/ShopBrand/Puma/Puma";
import ImageSlide from "./components/ImageSlide";
import { SliderData } from "./data/sliderData";

function App() {
  return (
    <>
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

          <Routes>
            <Route path="/Nike_&_Jorden" element={<Nike />} />
            <Route path="/Adidas" element={<Adidas />} />
            <Route path="/New_Balance" element={<NewBalance />} />
            <Route path="/Puma" element={<Puma />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
