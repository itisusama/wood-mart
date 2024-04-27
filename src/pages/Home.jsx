import React, { Fragment } from "react";
import CarouselPage from "../components/CarouselPage";
import DualImageDisplay from "../components/DualImageDisplay";
import DualBanners from '../components/DualBanners';
import TextandImage from '../components/TextandImage';
import SalesBanner from '../components/SalesBanner';
import ProgressBarSect from "../components/ProgressBarSect";
import Newsletter from "../components/Newsletter";


const Home = () => {

  return (
    <Fragment>
        <CarouselPage/>
        <DualImageDisplay/>
        <DualBanners/>
        <TextandImage/>
        <SalesBanner/>
        <ProgressBarSect/>
        <Newsletter/>
    </Fragment>
  );
};

export default Home;