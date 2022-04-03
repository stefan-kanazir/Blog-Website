import React from "react";
import AllPosts from "../components/organisms/AllPosts";
import Hero from "../components/molecules/Hero";
import Features from "../components/molecules/Features";
import ContentImageDuo from "../components/molecules/ContentImageDuo";

const Home = () =>  {

  return (
    <div className="min-h-screen pb-12">
        <Hero /> 
        <div className="container mx-auto">
            <Features />
            <ContentImageDuo image = "shopify" />
            <ContentImageDuo image = "laptop" reverse />
            <h2 className="text-3xl lg:text-5xl font-semibold mb-16 mt-24 text-center">Featured Articles</h2>
            <AllPosts />
        </div>
    </div>
  )

}

export default Home;