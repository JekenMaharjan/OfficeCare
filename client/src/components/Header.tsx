import React from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                {/* Top bar */}
                <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
                    <div className="text-gray-600">
                        Free shipping on orders over $100 | Call: 1-800-OFFICE
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Account</span>
                        <span className="text-gray-600">Help</span>
                    </div>
                </div>

                {/* Main header */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A32CDF] to-[#106AD2] bg-clip-text text-transparent">
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
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#A32CDF] to-[#106AD2] text-white p-2 rounded-md hover:opacity-90 transition-opacity cursor-pointer">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right icons */}
                    <div className="flex items-center space-x-6">
                        <button className='bg-gradient-to-r from-[#A32CDF] to-[#106AD2] text-white p-2 rounded-xl'>
                            <a href="/register">SignUp</a>
                        </button>
                        <button className='bg-gradient-to-r from-[#A32CDF] to-[#106AD2] text-white p-2 rounded-xl'>
                            <a href="/signin">SignIn</a>
                        </button>
                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <Heart size={24} />
                        </button>
                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <User size={24} />
                        </button>
                        <button className="cursor-pointer relative hover:text-purple-600 transition-colors">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="pb-4">
                    <ul className="flex space-x-8 text-gray-700">
                        <li><a href="#" className="hover:text-purple-600 transition-colors font-medium">Home</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Computers & Laptops</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Printers & Scanners</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Office Furniture</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Electronics</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Supplies</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Special Deals</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;