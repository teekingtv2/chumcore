import React from "react";
import Head from "../../components/globals/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";
import HomeHowItWorks from "../../components/home/HomeHowItWorks";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeWhyChumcore from "../../components/home/HomeWhyChumcore";
import TopBar from "../../components/globals/TopBar";
import HomeSectionTwo from "../../components/home/HomeSectionTwo";

const HomePage = () => {
  return (
    <>
      <Head pageTitle="Welcome to Elder Intelligence" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeHowItWorks />
      <HomeWhyChumcore />
    </>
  );
};

export default HomePage;
