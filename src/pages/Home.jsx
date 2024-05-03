import React, { Fragment } from "react";
import CarouselPage from "../components/CarouselPage";
import DualImageDisplay from "../components/DualImageDisplay";
import DualBanners from '../components/DualBanners';
import TextandImage from '../components/TextandImage';
import SalesBanner from '../components/SalesBanner';
import Products from "../components/products";
import ProgressBarSect from "../components/ProgressBarSect";
import CarouselandImage from "../components/CarouselandImage";
import Newsletter from "../components/Newsletter";
import OurServices from "../components/OurServices";


const Home = () => {

  return (
    <Fragment>
        <CarouselPage/>
        <DualImageDisplay/>
        <SalesBanner/>
        <Products/>
        <OurServices/>
        <TextandImage/>
        <DualBanners/>
        <CarouselandImage/>
        <ProgressBarSect/>
        <Newsletter/>
    </Fragment>
  );
};

export default Home;