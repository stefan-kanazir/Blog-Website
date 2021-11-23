
import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoTwitter, IoMdMail } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"

const Header = () => {
	return (
		<footer className="py-12 bg-green-900">
            <div className="container mx-auto">
                <NavLink to="/" className="flex items-center justify-center">
                    <span className="text-xl lg:text-2xl font-semibold text-white">SmartCommerce</span>
                </NavLink>
                <nav className="text-gray-300 border-b pb-12 mt-4 border-opacity-20">
                    <ul className="flex gap-x-10 items-center justify-center">
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-white"
                                activeClassName="active-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="hover:text-white"
                                activeClassName="active-link"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-white"
                                activeClassName="active-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Second section */}
                <div className="flex justify-between items-end pt-6">
                    <span className="text-gray-300">© {new Date().getFullYear()} SmartCommerce. All rights reserved</span>
                    <ul className="flex gap-x-4">
                    <li>
                        <a href="#" target="_blank">
                        <IoLogoTwitter className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <FaFacebookF className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <IoMdMail className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
		</footer>
	);
};

export default Header;