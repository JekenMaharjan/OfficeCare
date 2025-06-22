import React from 'react';

const SpecialOffers = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Large offer card */}
                    <div className="bg-gradient-to-br from-[#A32CDF] to-[#106AD2] rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        <div className="relative z-10">
                            <div className="inline-block bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                Limited Time Offer
                            </div>
                            <h3 className="text-3xl font-bold mb-4">
                                Complete Office Setup
                            </h3>
                            <p className="text-white/90 mb-6 text-lg">
                                Get everything you need for a modern office. Desk, chair, monitor, and accessories included!
                            </p>
                            <div className="flex items-center mb-6">
                                <span className="text-4xl font-bold">$899</span>
                                <span className="text-xl text-white/70 line-through ml-3">$1,299</span>
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-3">
                                    Save $400
                                </span>
                            </div>
                            <button className="cursor-pointer bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                                Shop Bundle
                            </button>
                        </div>
                    </div>

                    {/* Two smaller offer cards */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Free Shipping</h4>
                                    <p className="text-white/90 mb-4">On orders over $100</p>
                                    <button className="cursor-pointer bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Shop Now
                                    </button>
                                </div>
                                <div className="text-4xl">🚚</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Extended Warranty</h4>
                                    <p className="text-white/90 mb-4">3 years protection plan</p>
                                    <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                                        Learn More
                                    </button>
                                </div>
                                <div className="text-4xl">🛡️</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;