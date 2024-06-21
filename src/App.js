import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import News from "./components/Header/MoreInfo/News/News";
import About from "./components/Header/MoreInfo/About/About";
import Sell from "./components/Header/MoreInfo/Selling/Sell";
import Help from "./components/Header/MoreInfo/Help/Help";
import SignUP from "./components/Header/Log/LogIn_SignUp/Signup";
import LogIn from "./components/Header/Log/LogIn_SignUp/LogIn";
import { Breadcrumbs } from "./components/Breadcrumb";
import ShoesDetail from "./Pages/ShoesDetail/Page";
import NikePage from "./components/Sneaker/Nike/NikePage";
import LogPage from "./components/Header/Log/LogPage";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignUp" element={<SignUP />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Logpage" element={<LogPage />} />
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
        
          {/* Shoes Detail */}
          <Routes>
            {/* <Route
              path='/Sneaker/Under Armour/Curry/Under-Armour-Curry-11-Dub-Nation'
              element={<Page />} /> */}
            <Route exact path="/Sneaker/:id" element={<ShoesDetail />} />
            <Route path="/Nike" element={<NikePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
