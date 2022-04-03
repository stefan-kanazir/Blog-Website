
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="py-2 lg:py-4 container mx-auto">
            <div className="lg:px-0 py-4 lg:py-0 w-full mx-auto flex justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    <span className="text-xl lg:text-2xl font-semibold text-green-700">SmartCommerce</span>
                </NavLink>

                <nav className="hidden lg:block text-gray-600">
                    <ul className="flex gap-x-10 flex-col items-center lg:flex-row">
                        <li>
                            <a href="/#categories" className="hover:text-green-700 hover:underline">Categories</a>
                        </li>
                        <li>
                            <a href="/#blog" className="hover:text-green-700 hover:underline">Blog</a>
                        </li>
                        <li>
                            <a href="#footer" className="hover:text-green-700 hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>


                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? 
                            (
                                <span className="flex uppercase items-center py-3 px-6 text-sm bg-gray-100 gap-x-2 rounded-full font-semibold">     
                                    Menu<HiMenuAlt3 className="text-xl" />
                                </span>
                            ) 
                            : 
                            (
                                <span className="flex uppercase items-center py-3 px-6 text-sm bg-gray-800 text-white gap-x-2 rounded-full font-semibold"> 
                                    Close<IoClose className="text-xl" />
                                </span>
                            )
                        }
                    </button>
                </div>
            </div>

            {isOpen ? (
                <nav className="mx-auto py-4 shadow-2xl mb-8 block rounded lg:hidden">
                    <ul className="flex flex-col items-center px-6">
                        <li className="w-full" onClick={() => setIsOpen(!isOpen)}>
                            <a href="/" className="block text-xl p-6 w-full border-b">Home</a>
                        </li>
                        <li className="w-full" onClick={() => setIsOpen(!isOpen)}>
                            <a href="/#categories" className="block text-xl p-6 w-full border-b">Categories</a>
                        </li>
                        <li className="w-full" onClick={() => setIsOpen(!isOpen)}>
                            <a href="/#blog" className="block text-xl p-6 w-full border-b">Blog</a>
                        </li>
                        <li className="w-full" onClick={() => setIsOpen(!isOpen)}>
                            <a href="#footer" className="block text-xl p-6 w-full">Contact</a>
                        </li>
                    </ul>
                </nav>
                ) : (
                    <span className="sr-only">Open main menu</span>
            )}
		</header>
	);
};

export default Header;