import React from "react";
import AllPosts from "../components/organisms/AllPosts";
import Hero from "../components/molecules/Hero";
import Features from "../components/molecules/Features";

const Home = () =>  {

  return (
    <div className="min-h-screen pb-12">
        <Hero /> 
        <div className="container mx-auto">
            <Features />
            <h2 className="text-3xl lg:text-5xl mb-16 mt-24 text-center">Featured Articles</h2>
            <AllPosts />
        </div>
    </div>
  )

}

export default Home;