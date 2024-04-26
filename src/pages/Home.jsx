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
        <BannerSection heading="Welcome to My Website" paragraph="Explore and discover amazing things." btnText="Discover"/>
        <ProgressBarSect/>
    </Fragment>
  );
};

export default Home;