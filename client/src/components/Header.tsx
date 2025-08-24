import React from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="sticky h-25 flex items-center justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                {/* Main header */}
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        {/* Logo Image can still navigate home if needed */}
                        <Link href="/">
                            <img
                            className="h-20 w-20"
                            src="/OfficeCareLogo.png"
                            alt="Office Care Logo"
                            />
                        </Link>

                        {/* H1 scrolls to top, no navigation */}
                        <h1
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="cursor-pointer text-3xl font-bold bg-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 will-change-transform"
                        >
                            Office Care
                        </h1>
                    </div>


                    {/* Search bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for office appliances..."
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:opacity-90 transition-opacity cursor-pointer">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right icons */}
                    <div className="flex items-center space-x-4">
                        <button className='bg-green-500 text-white py-1 px-2 rounded-md hover:scale-105 transition-transform duration-300 will-change-transform'>
                            <Link href="/register">
                                Sign Up
                            </Link>
                        </button>
                        <button className='bg-blue-500 text-white py-1 px-2 rounded-md hover:scale-105 transition-transform duration-300 will-change-transform'>
                            <Link href="/signin">
                                Sign In
                            </Link>
                        </button>

                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <Heart size={24} />
                        </button>
                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <User size={24} />
                        </button>
                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <ShoppingCart size={24} />
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span> */}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;