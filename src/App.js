import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Post from "./pages/Post";
import FilteredPosts from "./pages/FilteredPosts";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
// import Category from "./components/molecules/Category";



// components
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";


function App() {
	return (
		<BrowserRouter>
		
			<Header /> 

			{/* Route Area */}
			<Routes>
				<Route element={<Home />} path="/" exact />
				<Route element={<Blog />} path="/blog" />
				<Route element={<Categories />} path="/categories" />

				{/* Posts & Category pages */}
				<Route element={<Post />}  path="/blog/:slug" />
				<Route element={<FilteredPosts />}  path="/category/:slug" />
			</Routes>

			<Footer />

		</BrowserRouter>
	);
}

export default App;