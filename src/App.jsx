import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import SingleProduct from './pages/SingleProduct'
<<<<<<< HEAD
=======
import Faq from './pages/Faq';
import SingleBlog from './pages/SingleBlog';
>>>>>>> 92d1338f330f51edd6652dc6850eed36e43813d8
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const App = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
// }, []);

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
<<<<<<< HEAD

=======
        <Route path="/faq" element={<Faq/>} />
        <Route path="/single-blog" element={<SingleBlog/>} />
>>>>>>> 92d1338f330f51edd6652dc6850eed36e43813d8
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App