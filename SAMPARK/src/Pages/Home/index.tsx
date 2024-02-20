import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import OurValues1 from '../../components/HomeOurValues/OurValues1';
import MainBlogs from '../../components/MainBlogs/MainBlogs';
import { Divider } from '@mantine/core';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import useStyles from './styles';
import MapBox from '../../components/MapBox/MapBox';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Faq from "../../components/Faq/Faq";
function Home() {
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <HomeHeader />
        <HeroSection />
      </div>
      <OurValues1 />
      <ImageGallery />
      <MapBox />
      <Divider m={20} mx={70} size="xs" />
      <MainBlogs />
      <Faq/>
      <ContactUs />
    </div>
  );
}

export default Home;
