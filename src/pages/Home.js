import React from "react";
import AllPosts from "../components/organisms/AllPosts";
import Hero from "../components/molecules/Hero";
import Features from "../components/molecules/Features";
import ContentImageDuo from "../components/molecules/ContentImageDuo";
import Categories from "./Categories";

const Home = () =>  {

  return (
    <div className="min-h-screen pb-12">
        <Hero /> 
        <Categories />
        <div className="container mx-auto">
          <ContentImageDuo image = "shopify" />
          <ContentImageDuo image = "laptop" reverse />
          <Features />
          <h2 className="text-3xl lg:text-5xl font-semibold mb-16 mt-32 text-center" id="blog">Featured Articles</h2>
          <AllPosts />
        </div>
    </div>
  )

}

export default Home;