import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#A32CDF] to-[#106AD2] text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                            Up to 40% off on Premium Office Equipment
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Complete Office
                            <span className="block text-yellow-300">Solutions</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-md">
                            Everything you need to create the perfect workspace. From high-tech appliances to essential supplies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                                Shop Now
                            </button>
                            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                                View Catalog
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="relative">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/30 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">500+</div>
                                        <div className="text-sm">Products</div>
                                    </div>
                                    <div className="bg-white/30 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">50+</div>
                                        <div className="text-sm">Brands</div>
                                    </div>
                                    <div className="bg-white/30 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">24/7</div>
                                        <div className="text-sm">Support</div>
                                    </div>
                                    <div className="bg-white/30 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">Free</div>
                                        <div className="text-sm">Shipping</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;