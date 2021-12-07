import React from "react";
import { Link } from "react-router-dom";

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import { SecondaryButton } from '../atoms';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const Category = ({ category }) => {
	return (
		<article className="group flex flex-col shadow-lg h-full bg-gray-800 rounded-xl overflow-hidden">
			{/* <Link to={"/category/" + category.title}>
				<div class="aspect-w-16 aspect-h-9">				
					<img
						src={urlFor(category.image).url()}
						alt={category.title}
						className="group w-full h-full object-center object-cover"
					/>				
				</div>
			</Link> */}

			<div className="p-12 flex-grow">
				<h2 className="text-white font-semibold mb-4">{category.title}</h2>
				<p className="pb-10 text-gray-300">{category.description}</p>
				<Link to={"/category/" + category.title}>
					<SecondaryButton $light={true}>
						View all posts
					</SecondaryButton>
				</Link>
			</div>
		</article>
	);
};

export default Category;