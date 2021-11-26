import React from "react";
import AllPosts from "../components/AllPosts";
import Hero from "../components/Hero";

const Home = () =>  {

  return (
    <div className="min-h-screen">
        <div className="container mx-auto">
            <Hero /> 
            <h2 className="text-3xl lg:text-5xl mb-12 text-center">Featured Articles</h2>
            <AllPosts />
        </div>
    </div>
  )

}

export default Home;