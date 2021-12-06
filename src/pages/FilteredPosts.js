import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client";
import { HiArrowNarrowRight } from "react-icons/hi";

const FilteredPosts = () => {
	const [filteredPosts, setfilteredPosts] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				` *[_type == "post" && category._ref in *[_type=="category" && title=="${slug}"]._id ]{
					title,
					shortDescription,
					slug,
					mainImage{
					  asset->{
					  _id,
					  url
					  }
					},
					body,
					category->{
					  title
					},
       			}`
			)
			.then((data) => setfilteredPosts(data))
			.catch(console.error);
	}, [slug]);

	return (
		<div className="container mx-auto py-12">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8">
			{filteredPosts &&
			filteredPosts.map((post, index) => (
				<Link to={"/blog/" + post.slug.current} key={post.slug.current}>
					<article key={index} className="group flex flex-col shadow-lg h-full bg-white duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl">
						<div class="aspect-w-16 aspect-h-9">
						<img src={post.mainImage.asset.url} alt={`${post.title}`} className="group w-full h-full object-center object-cover" />
						</div>
			
						<small className="mb-3 mt-6 border-l-2 border-green-700 pl-6 text-sm block text-green-700 font-bold">{post.category.title}</small>
			
						<div className="px-6 pb-6 flex-grow">
							<h2 className="text-lg font-semibold mb-1">{post.title}</h2>
							<p className="text-gray-600">{post.shortDescription}</p>
						</div>
			
						<button className="px-6 py-3 flex items-center self-end rounded-sm bg-gray-200 uppercase text-xs tracking-wider font-medium opacity-100 lg:opacity-0 duration-500 ease-in-out group-hover:opacity-100">
							<span className="mr-2">Read more</span> <HiArrowNarrowRight />
						</button>
					</article>
				</Link>
				))}
			</div>
		</div>
	  );
};

export default FilteredPosts;