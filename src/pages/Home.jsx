import React, { Fragment } from "react";
import CarouselPage from "../components/CarouselPage";
import DualImageDisplay from "../components/DualImageDisplay";
import DualBanners from '../components/DualBanners';
import TextandImage from '../components/TextandImage';
import BannerSection from '../components/Banner';
import ProgressBarSect from "../components/ProgressBarSect";


const Home = () => {

  return (
    <Fragment>
        <CarouselPage/>
        <DualImageDisplay/>
        <DualBanners/>
        <TextandImage/>
        <BannerSection/>
        <ProgressBarSect/>
    </Fragment>
  );
};

export default Home;