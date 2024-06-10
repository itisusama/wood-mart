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
import Faq from './pages/Faq';
import SingleBlog from './pages/SingleBlog';
import Blog from './pages/Blog';
import SofaSets from './pages/categories/SofaSets';
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
      <Navbar />
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
      </Routes>
      {/* <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} /> */}
      <Footer/>
    </Router>
    </>
  )
}

export default App