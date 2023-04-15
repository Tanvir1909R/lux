import React from "react";
import { Footer, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
