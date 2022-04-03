import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms";
import { AiFillShopping } from "react-icons/ai"

const Category = ({ category }) => {
	return (
		<article className="group flex flex-col shadow-md h-full bg-gray-100 rounded-xl overflow-hidden">
			<div className="p-12 flex-grow">
				<div className="min-w-3rem w-12 h-12 bg-gray-800 rounded-full grid place-items-center mb-6">
					<AiFillShopping className="text-xl text-white"/>
				</div>
				<h2 className="font-semibold mb-4">{category.title}</h2>
				<p className="pb-10">{category.description}</p>
				<Link to={"/category/" + category.title}>
					<PrimaryButton $light={false}>
						View all posts
					</PrimaryButton>
				</Link>
			</div>
		</article>
	);
};

export default Category;