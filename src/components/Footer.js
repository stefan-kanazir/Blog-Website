
import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoTwitter, IoMdMail, IoLogoGithub, IoLogoDribbble, IoLogoLinkedin } from "react-icons/io";

const Header = () => {
	return (
		<footer className="py-12 bg-green-900 mt-12">
            <div className="container mx-auto">
                <NavLink to="/" className="text-xl block text-center lg:text-2xl font-semibold text-white hover:text-gray-300">
                    SmartCommerce
                </NavLink>
                <nav className="text-gray-300 border-b pb-12 mt-4 border-opacity-20">
                    <ul className="flex gap-x-10 items-center justify-center">
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-white hover:underline"
                                activeClassName="active-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="hover:text-white hover:underline"
                                activeClassName="active-link"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-white hover:underline"
                                activeClassName="active-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Second section */}
                <div className="flex flex-col items-center md:flex-row justify-between pt-6">
                    <span className="text-gray-300 mb-4 md:mb-0">©{new Date().getFullYear()} SmartCommerce. All rights reserved</span>
                    <ul className="flex gap-x-4">
                    <li>
                        <a href="#" target="_blank">
                        <IoLogoTwitter className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <IoLogoLinkedin className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <IoLogoGithub className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <IoMdMail className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <IoLogoDribbble className="inline text-lg text-white hover:text-gray-300" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
		</footer>
	);
};

export default Header;