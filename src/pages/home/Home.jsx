import React from "react";
import "./home.scss";
import { Membership, RecentWinner, Rewards, Support } from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home-lux</title>
      </Helmet>

      <section id="hero">
        <div>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uZUAQK9ggCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
      <section>
        <Rewards />
      </section>
      <section>
        <Membership />
      </section>
      <section>
        <RecentWinner />
      </section>
      <section>
        <Support/>
      </section>
    </>
  );
};

export default Home;
