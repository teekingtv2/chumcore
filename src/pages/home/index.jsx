import React from "react";
import Head from "../../components/globals/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import HomeHowItWorks from "../../components/home/HomeHowItWorks";
import HomeWhyChumcore from "../../components/home/HomeWhyChumcore";
import HomeSectionTwo from "../../components/home/HomeSectionTwo";
import HomeSocialProof from "../../components/home/HomeSocialProof";
import HomeBePart from "../../components/home/HomeBePart";
import HomeImpact from "../../components/home/HomeImpact";
import HomeFeaturesHighlight from "../../components/home/HomeFeaturesHighlight";

const HomePage = () => {
  return (
    <>
      <Head pageTitle="Welcome to Elder Intelligence" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeHowItWorks />
      <HomeWhyChumcore />
      <HomeSocialProof />
      <HomeFeaturesHighlight />
      <HomeImpact />
      <HomeBePart />
    </>
  );
};

export default HomePage;
