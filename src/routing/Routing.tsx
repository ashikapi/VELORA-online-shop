
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../layOut/Layout";
import Faq from "../pages/Faq";
import ScrollToTop from "../components/ScrollToTop";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Careers from "../pages/Careers";

const Routing = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
        
      {/* Layout as parent */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside Layout */}
        <Route index element={<Home />} /> {/* default route */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="faqus" element={<Faq />}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="career" element={<Careers/>}/>
      </Route>
    </Routes>
    </>
  );
};

export default Routing;
