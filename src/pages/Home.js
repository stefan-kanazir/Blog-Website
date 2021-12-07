import React from "react";
import AllPosts from "../components/organisms/AllPosts";
import Hero from "../components/molecules/Hero";

const Home = () =>  {

  return (
    <div className="min-h-screen pb-12">
        <Hero /> 
        <div className="container mx-auto">
            <h2 className="text-3xl lg:text-5xl mb-12 text-center">Featured Articles</h2>
            <AllPosts />
        </div>
    </div>
  )

}

export default Home;