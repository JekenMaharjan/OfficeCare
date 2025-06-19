import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#A32CDF] to-[#106AD2] bg-clip-text text-transparent mb-4">
                            Office Care
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for complete office solutions. We provide high-quality appliances and equipment for modern workspaces.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                f
                            </div>
                            <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                                t
                            </div>
                            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                                in
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Special Offers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Computers & Laptops</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Printers & Scanners</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Office Furniture</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Supplies</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3 text-gray-400">
                            <div>
                                <div className="font-medium text-white">Phone</div>
                                <div>1-800-OFFICE (1-800-633-4235)</div>
                            </div>
                            <div>
                                <div className="font-medium text-white">Email</div>
                                <div>support@officecare.com</div>
                            </div>
                            <div>
                                <div className="font-medium text-white">Address</div>
                                <div>123 Business Ave, Suite 100<br />New York, NY 10001</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        © 2024 Office Care. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
