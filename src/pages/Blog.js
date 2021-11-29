import React from "react";
import AllPosts from "../components/AllPosts";

const Home = () =>  {

  return (
    <div className="min-h-screen py-12">
        <div className="container mx-auto"> 
            <h2 className="text-3xl lg:text-5xl flex justify-center mb-4">Blog Posts</h2>
            <h3 className="text-lg text-gray-600 flex justify-center mb-12 text-center mx-auto max-w-4xl">On the SmartCommerce blog, you’ll find in-depth guides, how-tos, success stories, interviews, reviews, special announcements, promotions, and much more, all designed to help entrepreneurs, developers, designers, and marketers to bring online shopping experience to another level.</h3>
            <AllPosts />
        </div>
    </div>
  )
}

export default Home;