import React from "react";
import AllPosts from "../components/AllPosts";

const Home = () =>  {

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6">
        <div className="container mx-auto"> 
            <h2 className="text-5xl flex justify-center mb-4">Blog Posts</h2>
            <h3 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog posts page</h3>
            <AllPosts />
      </div>
    </div>
  )
}

export default Home;