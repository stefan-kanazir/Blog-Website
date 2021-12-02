import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import Category from "../components/molecules/Category";

const Categories = () => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category"]{
                    title,
                    slug,
                    description,
                    image{
                        asset->{
                        _id,
                        url
                        },
                    },
                }`
			)
			.then((data) => setCategories(data))
			.catch(console.error);
	}, []);

	return (
		<section className="container mx-auto min-h-screen py-12"> 
			<h2 className="text-3xl lg:text-5xl flex justify-center mb-4">Categories</h2>
			<h3 className="text-lg text-gray-600 flex justify-center mb-12 text-center mx-auto max-w-4xl">On the SmartCommerce blog, you’ll find in-depth guides, how-tos, success stories, interviews, reviews, special announcements, promotions, and much more, all designed to help entrepreneurs, developers, designers, and marketers to bring online shopping experience to another level.</h3>

			<div className="grid md:grid-cols-2 auto-rows-max gap-8 md:max-w-4xl mx-auto">
				{categories &&
					categories.map((category) => (
							<Category key={category._id} category={category} />						
					))}
			</div>
		</section>
	);
};

export default Categories;