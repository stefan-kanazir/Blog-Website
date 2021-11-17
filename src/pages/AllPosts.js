import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

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
    <div className="bg-gray-100 min-h-screen p-12">
      <div className="container mx-auto"> 
        <h2 className="text-5xl flex justify-center mb-4">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog posts page</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <article key={index} className="group">
                  <div>
                    <img src={post.mainImage.asset.url} alt={`${post.title}`} className="object-cover w-full h-40 xl:h-80" />
                  </div>
                  <div className="bg-white grid">
                    <div className="p-6">
                      <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                      <p className="text-gray-600">{post.shortDescription}</p>
                    </div>
                    <button className="px-6 py-3 justify-self-end mr-0 bg-gray-300 uppercase text-xs tracking-wider font-medium opacity-0 lg:opacity-0 duration-500 ease-in-out group-hover:opacity-100">
                      Learn more
                    </button>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;