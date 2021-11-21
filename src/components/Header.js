
import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/logo.svg';

const Header = () => {
	return (
		<header className="py-3">
            <nav className="container lg:px-0 px-6 py-4 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    {/* <Logo className="text-xl w-10 h-10"/> */}
                    <p className="text-xl lg:text-2xl font-semibold text-green-600">SmartCommerce</p>
                </NavLink>
                <div className="lg:block text-gray-600">
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
                                to="/ecommerce"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                Ecommerce
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tech"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                Tech
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/marketing"
                                className="hover:text-green-600"
                                activeClassName="active-link"
                            >
                                Marketing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/amazon"
                                className="hover:text-green-600"
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