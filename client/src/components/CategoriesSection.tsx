import React from 'react';

const categories = [
    {
        name: 'Computers & Laptops',
        description: 'High-performance workstations',
        image: '💻',
        color: 'from-blue-500 to-purple-600'
    },
    {
        name: 'Printers & Scanners',
        description: 'Professional printing solutions',
        image: '🖨️',
        color: 'from-green-500 to-blue-500'
    },
    {
        name: 'Office Furniture',
        description: 'Ergonomic workspace furniture',
        image: '🪑',
        color: 'from-orange-500 to-red-500'
    },
    {
        name: 'Audio & Video',
        description: 'Conference & presentation tools',
        image: '🎥',
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Networking',
        description: 'Routers, switches & accessories',
        image: '🌐',
        color: 'from-teal-500 to-green-500'
    },
    {
        name: 'Office Supplies',
        description: 'Essential daily supplies',
        image: '📋',
        color: 'from-yellow-500 to-orange-500'
    }
];

const CategoriesSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our comprehensive range of office appliances and equipment, carefully curated for modern workspaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {category.image}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {category.description}
                            </p>
                            <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                                Shop now
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;