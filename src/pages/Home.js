import React from "react";
import AllPosts from "../components/AllPosts";

const Home = () =>  {

  return (
    <div className="min-h-screen py-12">
        <div className="container mx-auto"> 
            <h2 className="text-5xl flex justify-center mb-12">Featured Articles</h2>
            <AllPosts />
        </div>
    </div>
  )

}

export default Home;