import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import SingleProduct from './pages/SingleProduct'
import Faq from './pages/Faq';
import SingleBlog from './pages/SingleBlog';
import Blog from './pages/Blog';
//All Pages in Dropdown
import SofaSets from './pages/categories/SofaSets';
import CornerSofas from './pages/categories/CornerSofas';
import Sofas from './pages/categories/Sofas';
import Armchairs from './pages/categories/Armchairs'
import LivingRoom  from './pages/categories/LivingRoom';
import ShopAllSofas from './pages/categories/ShopAll';
import DiningSets from './pages/categories/DiningSets';
import TVUnits from './pages/categories/TvUnits';
import ShopAllDining from './pages/categories/AllDining';
import OttomanBeds from './pages/OttomanBeds';
import BedroomSets from './pages/categories/BedroomSets';
import YoungRoomSets from './pages/categories/YoungRoomSets';
import ShopAllBeds from './pages/categories/ShopAllBeds';
import BedSet from './pages/categories/BedSet';
import CoffeeTables from './pages/categories/CoffeeTables';
import NestingTables from './pages/categories/NestingTables';
import TvUnitAccessories from './pages/categories/TvUnitAccesories';
import ShopAllAccessories from './pages/categories/AllAccessories';
import SpecialOffers from './pages/SpecialOffers';
import Sofa from './pages/Sofa';
import Mattresses from './pages/Mattresses';
import DisplayOffers from './pages/DisplayOffers';



// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
// import ActionProvider from './pages/ActionProvider'
// import MessageParser from './pages/MessageParser';
// import config from './pages/config';

const App = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
// }, []);

  return (
    <>
      <Router>
      {/* <Navbar /> */}
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/single-blog" element={<SingleBlog/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/sofa-sets" element={<SofaSets/>} />
        <Route path="/corner-sofas" element={<CornerSofas/>} />
        <Route path="/sofas" element={<Sofas/>} />
        <Route path="/arm-chairs" element={<Armchairs/>} />
        <Route path="/living-room" element={<LivingRoom/>} />
        <Route path="/shop-all-sofas" element={<ShopAllSofas/>} />
        <Route path="/dining-sets" element={<DiningSets/>} />
        <Route path="/tv-units" element={<TVUnits/>} />
        <Route path="/shop-all-dining-tables" element={<ShopAllDining/>} />
        <Route path="/ottoman-beds" element={<OttomanBeds/>} />
        <Route path="/bedroom-sets" element={<BedroomSets/>} />
        <Route path="/young-room-sets" element={<YoungRoomSets/>} />
        <Route path="/shop-all-beds" element={<ShopAllBeds/>} />
        <Route path="/bed-set" element={<BedSet/>} />
        <Route path="/coffee-tables" element={<CoffeeTables/>} />
        <Route path="/nesting-tables" element={<NestingTables/>} />
        <Route path="/tv-unit-accessories" element={<TvUnitAccessories/>} />
        <Route path="/shop-all-accessories" element={<ShopAllAccessories/>} />
        <Route path="/special-offers" element={<SpecialOffers/>} />
        <Route path="/sofa" element={<Sofa/>} />
        <Route path="/mattresses" element={<Mattresses/>} />
        <Route path="/display-offers" element={<DisplayOffers/>} />







      </Routes>
      {/* <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} /> */}
      <Footer/>
    </Router>
    </>
  )
}

export default App