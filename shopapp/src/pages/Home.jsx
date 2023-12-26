import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products.jsx";
import NewsLeteer from "../components/NewsLeteer.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLeteer />
      <Footer />
    </>
  );
};

export default Home;
