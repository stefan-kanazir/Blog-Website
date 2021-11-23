
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="py-4 bg-white">
            <div className="container lg:px-0 px-6 py-4 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    <span className="text-xl lg:text-2xl font-semibold text-green-600">SmartCommerce</span>
                </NavLink>
                <nav className="lg:block text-gray-600">
                    <ul className="flex gap-x-10 flex-col items-center lg:flex-row">
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
		</header>
	);
};

export default Header;