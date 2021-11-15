import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import AllPosts from "./pages/AllPosts"
import Post from "./pages/Post";


function App() {
	return (
		<BrowserRouter>
			{/* Header Area */}
			<div className="max-w-full">
				{/* <Header /> */}
			</div>

			{/* Route Area */}
			<Routes>
        <Route element={<AllPosts />} path="/" exact />
        <Route element={<Post />}  path="/:slug" />
			</Routes>

			{/* Footer Area */}
			<div className="max-w-full">
				{/* <Footer /> */}
			</div>

		</BrowserRouter>
	);
}

export default App;