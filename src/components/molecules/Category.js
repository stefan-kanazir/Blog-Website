import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../atoms";
import { MdOutlineFeaturedVideo } from "react-icons/md"

const Category = ({ category }) => {
	return (
		<article className="group flex flex-col shadow-lg h-full bg-gray-800 rounded-xl overflow-hidden">
			<div className="p-12 flex-grow">
				<div className="min-w-3rem w-12 h-12 bg-gray-100 rounded-full grid place-items-center mb-6">
					<MdOutlineFeaturedVideo className="text-xl text-grey-800"/>
				</div>
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