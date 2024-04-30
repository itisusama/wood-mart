import React, { Fragment } from "react";
import CarouselPage from "../components/CarouselPage";
import DualImageDisplay from "../components/DualImageDisplay";
import DualBanners from '../components/DualBanners';
import TextandImage from '../components/TextandImage';
import SalesBanner from '../components/SalesBanner';
import ProgressBarSect from "../components/ProgressBarSect";
import CarouselandImage from "../components/CarouselandImage";
import Newsletter from "../components/Newsletter";
import OurServices from "../components/OurServices";
import ProductCards from "../components/ProductCards";


const Home = () => {

  return (
    <Fragment>
        <CarouselPage/>
        <DualImageDisplay/>
        <SalesBanner/>
        <OurServices/>
        <TextandImage/>
        <DualBanners/>
        <CarouselandImage/>
        <ProgressBarSect/>
        <ProductCards/>
        <Newsletter/>
    </Fragment>
  );
};

export default Home;