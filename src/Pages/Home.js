import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import ProductFeed from "../Components/ProductFeed";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
};

export default Home;
