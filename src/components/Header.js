
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="py-3">
            <nav className="container lg:px-0 px-6 py-4 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
                <NavLink to="/">
                    <p className="text-xl lg:text-2xl font-bold">SmartCommerce</p>
                </NavLink>
                <div className="lg:block text-gray-600">
                    <ul className="flex gap-x-10 flex-col items-center lg:flex-row">
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-black"
                                activeClassName="active-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/ecommerce"
                                className="hover:text-black"
                                activeClassName="active-link"
                            >
                                Ecommerce
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tech"
                                className="hover:text-black"
                                activeClassName="active-link"
                            >
                                Tech
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/marketing"
                                className="hover:text-black"
                                activeClassName="active-link"
                            >
                                Marketing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/amazon"
                                className="hover:text-black"
                                activeClassName="active-link"
                            >
                                Amazon
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
		</header>
	);
};

export default Header;