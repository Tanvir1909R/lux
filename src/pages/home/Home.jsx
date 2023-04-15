import React from "react";
import "./home.scss";
import { Membership, Rewards, Slider } from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home-lux</title>
      </Helmet>

      <section id="hero">
        <Slider isNavigation={true} />
      </section>
      <section>
        <Rewards />
      </section>
      <section>
      <Membership/>
      </section>
    </>
  );
};

export default Home;
