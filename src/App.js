import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Post from "./pages/Post";
import Blog from "./pages/Blog";


// components
import Header from "./components/Header";


function App() {
	return (
		<BrowserRouter>
			{/* Header Area */}
			<div className="max-w-full">
				<Header /> 
			</div>

			{/* Route Area */}
			<Routes>
				<Route element={<Home />} path="/" exact />
				<Route element={<Blog />} path="/blog" />
				<Route element={<Post />}  path="blog/:slug" />
			</Routes>

			{/* Footer Area */}
			<div className="max-w-full">
				{/* <Footer /> */}
			</div>

		</BrowserRouter>
	);
}

export default App;