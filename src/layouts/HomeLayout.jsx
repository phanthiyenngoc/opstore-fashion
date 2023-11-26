import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "../pages/Home";

const HomeLayOut = () => {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayOut;
