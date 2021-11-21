import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { HiArrowNarrowRight } from "react-icons/hi"

const AllPosts = () =>  {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        shortDescription,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6">
      <div className="container mx-auto"> 
        <h2 className="text-5xl flex justify-center mb-4">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog posts page</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <article key={index} className="group flex flex-col shadow-lg h-full bg-white duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl">
                  <div class="aspect-w-16 aspect-h-9">
                    <img src={post.mainImage.asset.url} alt={`${post.title}`} className="group w-full h-full object-center object-cover" />
                  </div>

                  <div className="p-6 flex-grow">
                      <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                      <p className="text-gray-600">{post.shortDescription}</p>
                  </div>

                  <button className="px-6 py-3 flex items-center self-end rounded-sm bg-gray-200 uppercase text-xs tracking-wider font-medium opacity-100 lg:opacity-0 duration-500 ease-in-out group-hover:opacity-100">
                    <span className="mr-2">Learn more</span> <HiArrowNarrowRight />
                  </button>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;