
import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
	return (
		<header className="py-2 lg:py-4 container mx-auto px-5 md:px-0">
            <div className="lg:px-0 py-4 lg:py-0 w-full mx-auto flex justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    <span className="text-xl lg:text-2xl font-semibold text-green-600">SmartCommerce</span>
                </NavLink>

                {/* Mobile Menu Icon */}
                <HiMenuAlt3 className="lg:hidden text-xl" />

                <nav className="hidden lg:block text-gray-600">
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