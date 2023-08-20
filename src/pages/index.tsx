import HomePageDekstop from "@/components/templates/HomePage/HomePage.dekstop";
import HomePageMobile from "@/components/templates/HomePage/HomePage.mobile";
import { MediaQuery } from "@mantine/core";
import React from "react";

const HomePage = () => {
  return (
    <>
      <MediaQuery className="dekstop" smallerThan={760} styles={{ display: "none" }}>
        <div>
          <HomePageDekstop />
        </div>
      </MediaQuery>
      <MediaQuery className="mobile" largerThan={760} styles={{ display: "none" }}>
        <div>
          <HomePageMobile />
        </div>
      </MediaQuery>
    </>
  );
};

export default HomePage;
