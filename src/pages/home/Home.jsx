import React from "react";
import "./home.scss";
import { Rewards, Slider } from "../../components";

const Home = () => {
  return (
    <>
      <section id="hero">
        <Slider isNavigation={true} />
      </section>
      <section>
        <Rewards />
      </section>
    </>
  );
};

export default Home;
